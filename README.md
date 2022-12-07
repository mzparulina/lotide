# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mzparulina26/lotide`

**Require it:**

`const _ = require('@mzparulina26/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: `Returns the first item in the array`
* `tail`: `Returns the "tail" of an array: everything except for the first item (head) of the provided array`
* `middle`: `Takes in an array and return the middle-most element(s) of the given array`
* `assertArraysEqual`: `Takes in two arrays and logs an appropriate message to the console.` 
* `assertEqual`: `Compares two values and print out a message telling us if they match or not`
* `eqArrays`: `Takes in two arrays and returns true or false`
* `assertObjectsEqual`: `Takes in two objects and logs an appropriate message to the console`
* `countLetters`: `Takes in a sentence (as a string) and then returns a count of each of the letters in that sentence`
* `countOnly`: `Returns a proper report on all the strings found in the input array`
* `eqObjects`: `Takes in two objects and returns true or false`
* `findKey`: `Takes in an object and a callback and return the first key for which the callback returns a truthy value`
* `findKeyByValue`: `Takes in an object and a value and returns the first key which contains the given value otherwise undefined`
* `flatten`: `Takes in an array containing elements including nested arrays of elements and return a "flattened" version of the array`
* `letterPositions`: `Returns all the indices (zero-based positions) in the string where each character is found`
* `map`: `Returns a new array based on the results of the callback function`
* `takeUntil`: `Keeps collecting items from a provided array until the callback provided returns a truthy value`
*  `without`: `Returns a subset of a given array and removes unwanted elements`