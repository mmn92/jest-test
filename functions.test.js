const functions = require('./functions');

/* Understanding the structure of the tests
    test(descriptionString, callbackFunction);
    descriptionString = 'The test scenario';
    callbackFunction = () => {
        expect(importedFunction(params)).matcher(expectedResult);
    }
    // matcher: toBe, toBeNull, toBeTruthy, toEqual and many others
*/
// Successfull test
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Failed test. Also using the .not modifier
test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.offsetAdd(2, 2)).not.toBe(5);
});
