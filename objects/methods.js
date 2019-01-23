let restaurant = {
    name: 'Gelian',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        if ((this.guestCount + partySize) < this.guestCapacity) {
            return true
        }
        else{
            return false
        }
        // if((restaurant.guestCount+partySize)<restaurant.guestCapacity){
        //     return true
        // }

    }
}
// object.somethin can be reffered to as this if called within the object
// method is an object property whose value is a function


// better implementation

let restaurant1 = {
    name: 'Gelian',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft

    },
    seatParty:function(partySize){
        this.guestCount += partySize
    },
    removeParty:function(partySize){
        this.guestCount -= partySize
        // -= is same as this.guestCount = this.guestCout-partySize
    }
    
}
restaurant1.seatParty(76)
restaurant1.removeParty(20)
let status = restaurant1.checkAvailability(5)
console.log(status)
