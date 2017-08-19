const { VendingMachine } = require('../src/vending-machine');

describe('Vending Machine', () => {
  let test;

  beforeEach(() => {
    test = {};

    test.testData = {
      cashRegister: [
        {
          name: "Five",
          value: 5.00,
          quantity: 10
        },
        {
          name: "Dollar",
          value: 1.00,
          quantity: 30
        },
        {
          name: "Toonie",
          value: 2.00,
          quantity: 20
        },
        {
          name: "Quarter",
          value: 0.25,
          quantity: 50
        },
        {
          name: "Dime",
          value: 0.10,
          quantity: 50
        },
        {
          name: "Nickel",
          value: 0.05,
          quantity: 50
        }
      ],
      inventory: [
        {
          id: 1,
          name: "Chips",
          price: 1.00,
          quantity: 10
        },
        {
          id: 2,
          name: "Soda",
          price: 1.25,
          quantity: 30
        },
        {
          id: 3,
          name: "Candy",
          price: 1.50,
          quantity: 40
        },
        {
          id: 4,
          name: "Nuts",
          price: 2.50,
          quantity: 10
        }
      ]
    }
    test.machine = new VendingMachine(test.testData)
  })

  describe('When printing the vending machine inventory', () => {

    it('should print the array of products', () => {
      const received = test.machine.printInventory()
      const expected =
        [
          {
            id: 1,
            name: "Chips",
            price: 1.00,
            quantity: 10
          },
          {
            id: 2,
            name: "Soda",
            price: 1.25,
            quantity: 30
          },
          {
            id: 3,
            name: "Candy",
            price: 1.50,
            quantity: 40
          },
          {
            id: 4,
            name: "Nuts",
            price: 2.50,
            quantity: 10
          }
        ]
      expect(received).toMatchObject(expected)
    })
  })

  describe('When the inventory quantity of any product is equal to or below 10', () => {
    it('should refill the inventory quantity back up to 50 items', () => {
      const received = test.machine.refillInventory()
      const expected = 50
      expect(received).toBe(expected)
    })
  })

  describe('When the cash register quantity of money is below 50', () => {
    it('should refill the cash register quantity back up to 50', () => {
      const received = test.machine.resupplyChange()
      const expected = 50
      expect(received).toBe(expected)
    })
  })

  describe('When money is inserted', () => {
    it('should check to see if there is payment', () => {
      const received = test.machine.checkMoney()
      const expected = false
      expect(received).toBe(expected)
    })

    it('should check to see if the money inserted is an accepted type', () => {
      const received = test.machine.checkMoney(20.00)
      const expected = false
      expect(received).toBe(expected)
    })
  })

  describe('When the correct money type is inserted', () => {
    it('should check to see if the selected product id is valid', () => {
      const received = test.machine.dispenseProduct(7, 1.00)
      const expected = false
      expect(received).toBe(expected)
    })
  })
})
