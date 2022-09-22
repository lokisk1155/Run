# RunAway before you get caught lacking


#BackGround
  * based in the mysterious world of App Academy, you must run away from your TA's or else you will get a strike and die 

#Live Link 
  * 'work in prog'
  
#How to play 
  * W to Move Up 
  * S to Move Down 
  * A to Move Left 
  * D to Move Right


#Functionality & MVPs
  * Monster Brute Force AI 
  * Movable character 
  * Collision detection 
  * Start screen

#Technologies, Libraries, APIs
  * Tiled (https://www.mapeditor.org/) 
    * allowed for the simple creation of game map => {
      allows you to export JSON Array like Data that marks out all collision blocks inside an array
    }
 
#Technical Implementation of Brute Force AI
 * Start the Great Chase 
 ``` 
     if (gameOn) {
        bruteForceChase({rec1: monster, rec2: player})
 ```
 * Before the AI moves : check for collisions : if true, must navigate taking collisions into consideration 
 ```
    function bruteForceChase({rec1, rec2}) {
    for (let i = 0; i < boundries.length; i++) {
        const bound = boundries[i]
        if (monsterCollision({rec1: monster, rec2: bound })) {
            navigateCollision({rec1: monster, rec2: player})
            return 
        } 
    }
    
             if (rec1.pos.x < rec2.pos.x + 15) {
                rec1.moveRight()
            }

            if (rec1.pos.y < rec2.pos.y - 100) {
                rec1.moveDown()
            }

            if (rec1.pos.y > rec2.pos.y - 100) {
                rec1.moveUp()
            }

            if (rec1.pos.x > rec2.pos.x +15) {
                rec1.moveLeft()
            }
    
}
```
* Before we attempt to navigate around the Collision : check if we are stuck 
```
  let prev = [0, 0]

  function navigateCollision({rec1, rec2}) {
    prev.push(rec1.pos.x)
    prev.push(rec1.pos.y)

    if (prev[0] === rec1.pos.x && prev[1] === rec1.pos.y) {
        prev.shift()
        prev.shift()
        helpImStuck(50)
        return 
    }  
    prev.shift()
    prev.shift() 
```
* If we are not stuck : check if increasing a specific direction will cause a collision : if it will not cause a collison, add value to that cordinate 
```
  if (
                    monsterCollision({
                        rec1: monster,
                        rec2: {
                            ...bound,
                            pos: {
                                x: bound.pos.x,
                                y: bound.pos.y + 3
                            }
                        }
                    })
                ) {
```
* If we are stuck : teleport to a smart location 
```
   let prevTeleport = 'leftop'
let prevdirect = 'top';
function helpImStuck(panic) {
        if (prevdirect === 'bottom' || mapY > -500) {
            if (prevTeleport === 'leftTop') {
                spawnRightTop()
                console.log('righttop')
                prevTeleport = 'rightTop'
                prevdirect = 'top'
            } else {
                spawnLeftTop()
                console.log('lefttop')
                prevTeleport = 'leftTop'
                prevdirect = 'top'
            }
        } else {
            if (prevTeleport === 'rightBottom') {
                spawnLeftBottom()
                console.log('leftbottom')
                prevTeleport = 'leftBottom'
                prevdirect = 'bottom'

            } else {
                spawnRightBottom()
                console.log('rightbottom')
                prevTeleport = 'rightBottom'
                prevdirect = 'bottom'
            }
        }
}
```

    
    
#Major Resource MVP: Chris Courses 
  * youtube: https://www.youtube.com/c/ChrisCourses
  * twitter: https://twitter.com/christopher4lis
    
  #Video's noted as key references:(symbol marked inside code)
  * https://www.youtube.com/watch?v=yP5DKzriqXA&t=9625s => **
  * https://www.youtube.com/watch?v=5IMXpp3rohQ&t=8150s => %%
  * https://www.youtube.com/watch?v=C4_iRLlPNFc&t=4347s => $$
    
 
