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
/*
Leaving this test comment for now
test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.offsetAdd(2, 2)).not.toBe(5);
});
*/

// Checks for null values
test('Returns null', () => {
  expect(functions.isNull()).toBeNull();
});

// Checks for falsy values
test('Returns falsy value', () => {
  expect(functions.returnSame(0)).toBeFalsy();
});

/* 
  Checks for the names in an user
  In this instance, you must use the .toEqual matcher
  If you use .toBe, the test will fail
*/
test('User should be Mister Brother', () => {
  expect(functions.returnUser()).toEqual({
    firstName: 'Mister',
    lastName: 'Brother'
  });
});

/* 
  Testing for inequalities
  You can check for values less than (or equal) and greater than (or equal)
*/
test('Should be less than, or equal 25', () => {
  expect(functions.square(5)).toBeLessThanOrEqual(25);
});

/*
  You can test async data, using promises
  expect.assertions(n) must be called with the number of assertions as param
  You must return the async function
*/
test('Should fetch user Ervin Howell', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Ervin Howell');
  });
});

// Async data test, using async await
test('Should fetch user Ervin Howell', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Ervin Howell');
});
