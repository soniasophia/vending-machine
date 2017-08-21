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
    for (var i = 0; i < this.vmData.inventory.length; i++) {
      if (this.vmData.inventory[i].quantity <= 10) {
        const refillProducts = refill - this.vmData.inventory[i].quantity;
        return refillProducts + this.vmData.inventory[i].quantity;
      }
    }
  }

  resupplyChange() {
    const resupply = 50;
    for (var i = 0; i < this.vmData.cashRegister.length; i++) {
      if (this.vmData.cashRegister[i].quantity < 50) {
        const resupplyMoney = resupply - this.vmData.cashRegister[i].quantity;
        return resupplyMoney + this.vmData.cashRegister[i].quantity;
      }
    }
  }

  checkMoney(payment) {
    if (payment) {
      for (var i = 0; i < this.vmData.cashRegister.length; i++) {
        if (payment === this.vmData.cashRegister[i].value) {
          return true;
        }
        return false;
      }
    } return false;
  }

  dispenseProduct(productId, payment) {
    if (productId && payment) {
      for (var i = 0; i < this.vmData.inventory.length; i++) {
        if (productId === this.vmData.inventory[i].id && payment === this.vmData.inventory[i].price) {
          return this.vmData.inventory[i].name;
        }
      }
    } return false;
  }

  returnChange(productId, payment) {
    if (productId && payment) {
      for (var i = 0; i < this.vmData.inventory.length; i++) {
        if (productId === this.vmData.inventory[i].id && payment > this.vmData.inventory[i].price) {
          const change = payment - this.vmData.inventory[i].price;
          return change;
          if (change) {
            for (var i = 0; i < this.vmData.cashRegister.length; i++) {
              if(change === this.vmData.cashRegister[i].value) {
                return this.vmData.cashRegister[i].name;
              }
            }
          }
        }
      }
    }
  }
}


module.exports = {
  VendingMachine
}