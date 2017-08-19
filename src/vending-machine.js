const inventory = require('../inventory.json');
const testData = require('../__mock__/test-data');

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
    for (var i in this.vmData.inventory) {
      if (this.vmData.inventory.hasOwnProperty(i)) {
        if (this.vmData.inventory[i].quantity <= 10) {
          var refillProducts = refill - this.vmData.inventory[i].quantity;
          return refillProducts + this.vmData.inventory[i].quantity;
        }
      }
    }
  }

  resupplyChange() {
    const resupply = 50;
    for (var i in this.vmData.inventory) {
      if (this.vmData.inventory.hasOwnProperty(i)) {
        if (this.vmData.cashRegister[i].quantity < 50) {
          var resupplyMoney = resupply - this.vmData.cashRegister[i].quantity;
          return resupplyMoney + this.vmData.cashRegister[i].quantity;
        }
      }
    }
  }

  dispenseProduct(productId, payment) {
    if (productId && payment) {
      for (var i in this.vmData.inventory) {
        if (this.vmData.inventory.hasOwnProperty(i)) {
          if (productId === this.vmData.inventory[i].id && payment >= this.vmData.inventory[i].price) {
            return this.vmData.inventory[i].name;
          }
        }
      }
    } return false;
  }

  returnChange() {

  }



}


module.exports = {
  VendingMachine
}