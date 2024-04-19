# Modash

## Overview

**Description**

<p>My personal version of lodash-like functions and other functions I found useful for JavaScript.  Overtime I'll add more functions as I encounter other repeatable solutions to problems.</p>

> [!NOTE]
> This has been built out assuming a Node environment and has Node module import/export language.

## Features

### Modular Functions

<p>The primary purpose of this project is to built out a series of modular functions in the spirit of lodash while adding in my own often-used functions for frequent tasks such as doing an API fetch. </p>

#### Primary Functions:

<p>These functions provide the functional logic for the package.  Calling these functions actually calls the input-parser functions that then call the functions with the functional logic, which are named "base"+the corresponding name below.</p>

- clamp.js
- fetchAPI.js
- findKey.js
- has.js
- inRange.js
- invert.js
- pad.js
- word.js

#### Helper Functions:

<p>These are functions not to be directly accessed but are used by the Primary Functions, typically to process certain inputs.</p>

- rangeFunctionArgSwitch.js

> [!CAUTION]
> Editing these functions could have unintended effects on various input parser functions that result in unexpected behavior of the Primary Functions. Use caution when editing!

## How to Use

### Process for importing using Node:

<p>Use the typical Node import syntax in the file(s) in which you want to use one or more functions, <i>e.g.</i>, </p>

&nbsp;&nbsp;&nbsp;&nbsp;`const clamp = require("Modash");`

## Technologies Used

This project was written 100% in JavaScript and designed for use in the Node runtime environment.

## License

This package is subject to the [GNU General Public License v3.0](https://raw.githubusercontent.com/MartinLBeacham/Modash/main/LICENSE).  Please review that license prior to using Modash.
