const marsRover = require('./marsRover.js')

test(" basic turn left", async function() {
    expect(marsRover.turnToLeft(marsRover.newRover(0,0,'N'))).toStrictEqual(marsRover.newRover(0,0,'W'));
    expect(marsRover.turnToLeft(marsRover.newRover(0,0,'W'))).toStrictEqual(marsRover.newRover(0,0,'S'));
    expect(marsRover.turnToLeft(marsRover.newRover(0,0,'S'))).toStrictEqual(marsRover.newRover(0,0,'E'));
    expect(marsRover.turnToLeft(marsRover.newRover(0,0,'E'))).toStrictEqual(marsRover.newRover(0,0,'N'));
});

test(" basic turn right", async function() {
    expect(marsRover.turnToRight(marsRover.newRover(0,0,'N'))).toStrictEqual(marsRover.newRover(0,0,'E'));
    expect(marsRover.turnToRight(marsRover.newRover(0,0,'E'))).toStrictEqual(marsRover.newRover(0,0,'S'));
    expect(marsRover.turnToRight(marsRover.newRover(0,0,'S'))).toStrictEqual(marsRover.newRover(0,0,'W'));
    expect(marsRover.turnToRight(marsRover.newRover(0,0,'W'))).toStrictEqual(marsRover.newRover(0,0,'N'));
});

test(" basic move foward", async function() {
    expect(marsRover.moveFoward(marsRover.newRover(1,1,'N'))).toStrictEqual(marsRover.newRover(1,2,'N'));
    expect(marsRover.moveFoward(marsRover.newRover(1,1,'E'))).toStrictEqual(marsRover.newRover(0,1,'E'));
    expect(marsRover.moveFoward(marsRover.newRover(1,1,'S'))).toStrictEqual(marsRover.newRover(1,0,'S'));
    expect(marsRover.moveFoward(marsRover.newRover(1,1,'W'))).toStrictEqual(marsRover.newRover(2,1,'W'));
});

test("calculate rover's next coordinate", async function() {
    expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'N'),'R')).toStrictEqual(marsRover.newRover(1,1,'E'));
    expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'E'),'M')).toStrictEqual(marsRover.newRover(0,1,'E'));
    expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'S'),'L')).toStrictEqual(marsRover.newRover(1,1,'E'));
    expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'W'),'M')).toStrictEqual(marsRover.newRover(2,1,'W'));
});

test("calculate rover's final coordinate ", async function() {
    expect(marsRover.getFinalCoordinates(marsRover.newRover(1,2,'N'),'LMLMLMLMM')).toStrictEqual(marsRover.newRover(1,3,'N'));
    expect(marsRover.getFinalCoordinates(marsRover.newRover(3,3,'E'),'MMRMMRMRRM')).toStrictEqual(marsRover.newRover(5,1,'E'));
});
