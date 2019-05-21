const functions = require('./functions');

/*
    You can create multiple test files, that will all run during the tests
    This file was created just to demonstrate that
*/
test('Add should be defined', () => {
  expect(functions.add).toBeDefined();
});
