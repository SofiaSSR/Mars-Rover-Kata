const marsRover = require('./marsRover.js')
const {describe} = require("node:test");

describe("basic turn right",()=>{
    test("makes orientation N to E", async function() {
        expect(marsRover.turnToRight(marsRover.newRover(0,0,'N'))).toStrictEqual(marsRover.newRover(0,0,'E'));
    });
    test("makes orientation S to W", async function() {
        expect(marsRover.turnToLeft(marsRover.newRover(0,0,'W'))).toStrictEqual(marsRover.newRover(0,0,'S'));
    });
});

describe("basic move foward",()=>{
    test("moves rovert in 1 1 N to 1 2 N", async function() {
        expect(marsRover.moveFoward(marsRover.newRover(1,1,'N'))).toStrictEqual(marsRover.newRover(1,2,'N'));
    });
    test("moves rovert in 1 1 E to 2 1 N", async function() {
        expect(marsRover.moveFoward(marsRover.newRover(1,1,'E'))).toStrictEqual(marsRover.newRover(2,1,'E'));
    });
    test("moves rovert in 1 1 S to 1 0 N", async function() {
        expect(marsRover.moveFoward(marsRover.newRover(1,1,'S'))).toStrictEqual(marsRover.newRover(1,0,'S'));
    });
    test("moves rovert in 1 1 W to 0 1 N", async function() {
        expect(marsRover.moveFoward(marsRover.newRover(1,1,'W'))).toStrictEqual(marsRover.newRover(0,1,'W'));
    });
});

describe("calculate rover's next coordinate",()=>{
    test("instruction R makes rovert in 1 1 N to 1 1 E", async function() {
        expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'N'),'R')).toStrictEqual(marsRover.newRover(1,1,'E'));
    });
    test("instruction M makes rovert in 1 1 E to 2 1 E", async function() {
        expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'E'),'M')).toStrictEqual(marsRover.newRover(2,1,'E'));
    });
    test("instruction L makes rovert in 1 1 S to 1 1 E", async function() {
        expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'S'),'L')).toStrictEqual(marsRover.newRover(1,1,'E'));
    });
    test("instruction M makes rovert in 1 1 W to 0 1 W", async function() {
        expect(marsRover.calculateNextCoordinate(marsRover.newRover(1,1,'W'),'M')).toStrictEqual(marsRover.newRover(0,1,'W'));
    });
});
describe("calculate rover's final coordinate ", async function() {
    test("for first given input :", function (){
        expect(marsRover.getFinalCoordinates(marsRover.newRover(1,2,'N'),'LMLMLMLMM',marsRover.newGrid(5,5))).toStrictEqual(marsRover.newRover(1,3,'N'));
    });
    test("for second given input :", function (){
        expect(marsRover.getFinalCoordinates(marsRover.newRover(3,3,'E'),'MMRMMRMRRM',marsRover.newGrid(5,5))).toStrictEqual(marsRover.newRover(5,1,'E'));
    });
    test("for crash option :", function (){
        try{marsRover.getFinalCoordinates(marsRover.newRover(3,3,'E'),'MMMM',marsRover.newGrid(5,5))
        }
        catch(e){
            expect(e).toEqual(new Error('Rover has crashed to grid border!'))
        };
    });
});

