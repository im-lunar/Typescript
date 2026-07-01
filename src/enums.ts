enum Directions {
    Up,  // 0
    Down,  // 1
    Left,   // 2
    Right   // 3
}

function doSomething(keyPressed: Directions) {
    // do something
}

doSomething(Directions.Up);
doSomething(Directions.Right);

console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);


// common use case of Enum

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

const app = express();

app.get("/", (req, res) => {
    if (!req.query.userId) {
        res.status(ResponseStatus.Error).json({})
    }
    // and so on...
    res.status(ResponseStatus.Success).json({})

})