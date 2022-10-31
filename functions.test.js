let myFunctions = require('./functions')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("greeting", () => {
    expect(myFunctions.greeting('James')).toEqual('Hello, James.')
    expect(myFunctions.greeting('Jill')).toEqual('Hello, Jill.')
})

describe("Math Challenge!", () => {
test("add", () => {
    expect(myFunctions.add(1, 2)).toEqual(3)
    expect(myFunctions.add(5, 9)).toEqual(14)
})

test("multiply", () => {
    expect(myFunctions.multiply(1, 2)).toEqual(2)
    expect(myFunctions.multiply(5, 9)).toEqual(45)
})

test("divide", () => {
    expect(myFunctions.divide(10, 2)).toEqual(5)
    expect(myFunctions.divide(10, 5)).toEqual(2)
})

test("subtract", () => {
    expect(myFunctions.subtract(2, 1)).toEqual(1)
    expect(myFunctions.subtract(9, 5)).toEqual(4)
})
})

