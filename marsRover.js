function getGridFromInput(input){
    return newGrid(input.split('\n')[0].split(' ')[0] ,input.split('\n')[0].split(' ')[1]);
}
function hasRoverCrashToGridBorder(rover,grid){
    return rover.x <0 || rover.x > grid.width || rover.y < 0 || rover.y > grid.height
}

function roverDoesNotCrashVerification(rover,grid){
    if(hasRoverCrashToGridBorder(rover,grid)){
        throw new Error('Rover has crashed to grid border!');
    }
}
function newRover(x,y,orientation){
    return {
        x: x,
        y: y,
        orientation: orientation
    }
}
function newGrid(width,height){
    return {
        width: width ,
        height: height
    }
}

function getUsableOrientation(orientation){
    return {
        'N' :[0,1],
        'W' :[-1,0],
        'S' :[0,-1],
        'E' :[1,0]
    }[orientation]
}
function getFinalCoordinates(rover, instructions,grid){
    return instructions.split('').reduce(
        (currentRover,instruction)=>{
            roverDoesNotCrashVerification(currentRover,grid)
            return calculateNextCoordinate(currentRover,instruction)},
        rover)
}
function calculateNextCoordinate(rover,instruction){
    return {
         'R': turnToRight(rover),
         'L': turnToLeft(rover),
         'M': moveFoward(rover)
    }[instruction]
}

function turnToRight(rover){
    return newRover(
        rover.x,
        rover.y,
        calculateTurningRightOrientation(rover.orientation))
}
function calculateTurningRightOrientation(orientation){
    return {
        'N' :'E',
        'W' :'N',
        'S' :'W',
        'E' :'S'
    }[orientation]
}

function turnToLeft(rover){
    return newRover(
        rover.x,
        rover.y,
        calculateTurningLeftOrientation(rover.orientation))
}
function calculateTurningLeftOrientation(orientation){
    return {
        'N':'W',
        'W':'S',
        'S':'E',
        'E':'N'
    }[orientation]
}

function moveFoward(rover){
    return newRover(
        calculateMovingFoward('x',rover.x,rover.orientation),
        calculateMovingFoward('y',rover.y,rover.orientation),
        rover.orientation)
}
function calculateMovingFoward(axis,magnitude,orientation){
    return magnitude+getUsableOrientation(orientation)[axis==='x'? 0 :1]
}
function parseRoverResult(rover){
    return Object.values(rover).join(' ')
}

module.exports = {
    turnToRight,
    turnToLeft,
    moveFoward,
    getFinalCoordinates,
    calculateNextCoordinate,
    newRover,
    newGrid
}

