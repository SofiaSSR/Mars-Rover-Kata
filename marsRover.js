function readRoverInput(input){
    input.split('\n')
    return {

    };
}
function newRover(x,y,orientation){
    return {
        x: x,
        y: y,
        orientation: orientation
    }

}

function getUsableOrientation(orientation){
    return {
        'N' :[0,1],
        'W' :[1,0],
        'S' :[0,-1],
        'E' :[-1,0]
    }[orientation]
}
function getFinalCoordinates(rover, instructions){

    return instructions.split('').reduce((currentRover,instruction)=>calculateNextCoordinate(currentRover,instruction),rover)
}
function calculateNextCoordinate(rover,instruction){
    switch (instruction){
        case 'R':
            return turnToRight(rover);
        case 'L':
            return turnToLeft(rover);
        case 'M':
            return moveFoward(rover);
    }
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
function displayResults(){
}


module.exports = {
    turnToRight,
    turnToLeft,
    moveFoward,
    getFinalCoordinates,
    calculateNextCoordinate,
    newRover
}

