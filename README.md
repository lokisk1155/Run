# RUN! [Live](https://lokisk1155.github.io/Run/)
### Collect all 4 coins to win! If the monster strikes you, the round will restart
  * W to Move Up 
  * S to Move Down 
  * A to Move Left 
  * D to Move Right
  
![Screen Shot 2022-11-28 at 10 52 58 AM](https://user-images.githubusercontent.com/95663040/204322594-31c6b179-8575-4288-88db-a21ff9c9f73d.png)
![Screen Shot 2022-11-28 at 10 55 55 AM](https://user-images.githubusercontent.com/95663040/204323042-a496055b-e23f-44fa-8dfc-422725bda4c1.png)
![Screen Shot 2022-11-28 at 10 59 02 AM](https://user-images.githubusercontent.com/95663040/204323639-1fea238d-a0d2-4b84-9831-4319d34ed49b.png)
![Screen Shot 2022-11-28 at 10 56 28 AM](https://user-images.githubusercontent.com/95663040/204323055-398e0e91-7b74-4485-8700-716e15f577d3.png)

## Functionality & MVPs
  * Monster AI
  * Movable/animated character 
  * Collision detection 
  * Coin Collection

## Technologies, Libraries, APIs
  * Tiled (https://www.mapeditor.org/) 
    * allowed for the simple creation of game map => {
      allows you to export JSON Array like Data that marks out all collision blocks inside an array
      
## Challanges Faced 
   * The character does not move on your screen, but gives the illusion of movement by offseting the enviroment around the monster. During my initial implementation, I did not take this into consideration, leaving myself with minimal options of how an AI would work as I am not tracking the player or monsters location. For the AI to work seemlessly, I would need to track offsetting moves inside an object that will represent the correct offset on every frame. Having this, I could then "revert" the map to its orginial state then implement a pathing algo for the monster to use. Implemented correctly, the monster AI should work seemlessly.
   
    
 
## Technical Implementation of AI
Start the Great Chase 
 ``` 
     if (gameOn) {
        bruteForceChase({rec1: monster, rec2: player})
 ```
 Before the AI moves : check for collisions : if true, must navigate taking collisions into consideration 
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
Before we attempt to navigate around the Collision : check if we are stuck 
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
If we are not stuck : check if increasing a specific direction will cause a collision : if it will not cause a collison, add value to that cordinate 
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
