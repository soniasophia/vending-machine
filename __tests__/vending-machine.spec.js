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
          name: "Chips",
          price: 1.00,
          quantity: 10
        },
        {
          name: "Soda",
          price: 1.25,
          quantity: 30
        },
        {
          name: "Candy",
          price: 1.50,
          quantity: 40
        },
        {
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
            "name": "Chips",
            "price": 1.00,
            "quantity": 10
          },
          {
            "name": "Soda",
            "price": 1.25,
            "quantity": 30
          },
          {
            "name": "Candy",
            "price": 1.50,
            "quantity": 40
          },
          {
            "name": "Nuts",
            "price": 2.50,
            "quantity": 10
          }
        ]
      expect(received).toMatchObject(expected)
    })
  })

})