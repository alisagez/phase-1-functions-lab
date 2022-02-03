// Code your solution in this file!

const headquarters = 42
const blockLength = 264


//Returns the number of blocks from headquarters to the pickup location.
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(headquarters - pickupLocation)
}

//Returns the number of feet from headquarters to the pickup location. References distanceFromHqInBlocks.
function distanceFromHqInFeet (pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * blockLength
}

//Calculates the number of feet a passenger travels given a starting block and an ending block. 
function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(blockLength * (endingBlock - startingBlock))
}

//Returns the fare for the customer. Uses the same starting/ending as in distanceTravelledInFeet. First 400 feet are free, 400-2000 feet = 2 cents/foot, 2000-2500 feet = flat fare, 2500+ feet = not allowed (cannot travel that far).

function calculatesFarePrice(startingBlock, endingBlock) {
    const distance = distanceTravelledInFeet(startingBlock, endingBlock)
    if (distance < 400) {
        return 0;
    } else if (distance > 40 && distance < 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
    }

    
