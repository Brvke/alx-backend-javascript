# ES6 basics

This project provides utilities for managing and iterating over employee data in different departments. It includes functions to create employee objects, report objects, and custom iterators.

## Functions

- `taskFirst()`: Uses `const` for variable declaration.
- `taskNext()`: Uses `let` for variable declaration.
- `taskBlock(trueOrFalse)`: Demonstrates block-scoped variables with `let`.
- `getNeighborhoodsList()`: Uses arrow functions for method definition.
- `getSumOfHoods(initialNumber, expansion1989, expansion2019)`: Uses default parameter values.
- `returnHowManyArguments(...args)`: Uses rest parameter syntax.
- `concatArrays(array1, array2, string)`: Uses spread syntax.
- `getSanFranciscoDescription()`: Uses template literals.
- `getBudgetObject(income, gdp, capita)`: Simplifies object creation using property shorthand.
- `getFullBudgetObject(income, gdp, capita)`: Uses ES6 method properties.
- `getBudgetForCurrentYear(income, gdp, capita)`: Uses computed property names.
- `appendToEachArrayValue(array, appendString)`: Uses `for...of` loop.
- `createEmployeesObject(departmentName, employees)`: Creates an employee object.
- `createReportObject(employeesList)`: Creates a report object from the employee list.
- `createIteratorObject(report)`: Creates an iterator to go through every employee in the report.

## Testing

The project uses the Jest testing framework. To run the tests:

```bash
npm run test