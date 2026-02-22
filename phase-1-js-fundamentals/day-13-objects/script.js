const inventory = {
    apples: 10,
    bananas: 15,
    oranges: 5,
    getTotal: function () {
        return this.apples + this.bananas + this.oranges;
    },
    printKeys: function () {
        return Object.keys(this)
    }
}
console.log(inventory.getTotal())
console.log(inventory.printKeys())