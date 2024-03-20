
const headquarters2 = 42;

function distanceFromHqInBlocks(location) {
    return Math.abs(location - headquarters);
}

console.log(distanceFromHqInBlocks(0)); 
console.log(distanceFromHqInBlocks(1)); 
console.log(distanceFromHqInBlocks(8)); 

let headquarters=42
function distanceFromHqInFeet(location) {
    const blockInFeet = 264; 
    const blocks = Math.abs(location - 42); 
    return blocks * blockInFeet; 
}


describe('distanceFromHqInFeet()', function() {
    it('returns distance in feet', function() {
        
        expect(distanceFromHqInFeet(50)).to.equal(2112);  
        
    });

    it('calculates distances below 42nd street', function() {
        
        expect(distanceFromHqInFeet(50, 60)).to.equal(2640); 
    });
    it('calculates distances below 42nd street', function() {
        
        expect(distanceFromHqInFeet(24)).to.equal(264); 
    });
    it('calculates distances below 42nd street', function() {
        
        expect(distanceFromHqInFeet(43, 48)).to.equal(1320); 
    });
});

function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; 
    const blocksTravelled = Math.abs(endBlock - startBlock); 
    return blocksTravelled * blockInFeet; 
}


describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {

        expect(distanceTravelledInFeet(43, 50)).to.equal(1848); 
    });

    it('returns distance when destination is below start', function() {
        
        expect(distanceTravelledInFeet(50, 43)).to.equal(1848); 
 
    });
});

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start); 
    const distanceInFeet = distance * 264; 


    if (distance === 0) {
        return 0;
    }

    
    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'deos not allow rides over 2500 feet'; 
    }
}

describe('calculatesFarePrice()', function() {
    it('gives customers a free sample', function() {
        
        expect(calculatesFarePrice(10, 10)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000', function() {
        expect(calculatesFarePrice(10, 11)).to.equal(0.02);
        expect(calculatesFarePrice(10, 20)).to.equal(3.92);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {

        expect(calculatesFarePrice(10, 25)).to.equal(25);
    });

});
