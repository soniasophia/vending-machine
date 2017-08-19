const inventory = require('../inventory.json');
const testData = require('../__mock__/test-data');

const cashRegister = {
  five: {
    name: "Five",
    value: 5.00,
    quantity: 20
  },
  dollar: {
    name: "Dollar",
    value: 1.00,
    quantity: 100
  },
  toonie: {
    name: "Toonie",
    value: 2.00,
    quantity: 50
  },
  quarter: {
    name: "Quarter",
    value: 0.25,
    quantity: 100
  },
  dime: {
    name: "Dime",
    value: 0.10,
    quantity: 50
  },
  nickel: {
    name: "Nickel",
    value: 0.05,
    quantity: 50
  }
}

class VendingMachine {
  constructor(data) {
    // this.product = inventory;
    // this.cash = cashRegister;
    this.vmData = testData(data)
  }

  printInventory() {
    return this.vmData.inventory
  }


  refillInventory() {
    const refill = 50;
    for (var i = 0; i < this.vmData.inventory.length; i++) {
      if (this.vmData.inventory[i].quantity <= 10) {
        var refillProducts = refill - this.vmData.inventory[i].quantity;
        return refillProducts + this.vmData.inventory[i].quantity;
      }
    }
  }

  resupplyChange() {
    const resupply = 50;
    for (var i = 0; i < this.vmData.cashRegister.length; i++) {
      if (this.vmData.cashRegister[i].quantity < 50) {
        var resupplyMoney = resupply - this.vmData.cashRegister[i].quantity;
        return resupplyMoney + this.vmData.cashRegister[i].quantity;
      }
    }
  }



  returnChange() {

  }



}


module.exports = {
  VendingMachine
}