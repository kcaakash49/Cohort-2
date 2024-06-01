
enum Direction {
    Up,Left,Right,Down
}
function doSomething(keypressed : Direction) {
    if (keypressed == Direction.Up){
        console.log("Hey")
    }else{
        console.log("hello")
    }
}

doSomething(Direction.Up)
doSomething(Direction.Down)


