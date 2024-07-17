# F-Try-Catch

A replacement for using try-catch in JavaScript/TypeScript!

It seems like a lot of people are stuck in the try-catch nightmare, so I built a better, clean, and type-safe solution.

## How it works

You just wrap any function you have with the `cleanFunction` that you get from the package and you're good to go. Instead of using try-catch, you do it like this:

```typescript
import { cleanFunction } from "f-try-catch";

const myFunction = cleanFunction(async (args: ANY_ARGS) => {
    // do anything you want
})

const { data, error } = await myFunction(args);

if (error === null) {
    console.log(data); // handle the data
} else {
    // handle errors
}
```

## Installation

This package is intended to be used anywhere: the browser, Node.js, Deno, the edge, and it has no dependencies, install:

```
npm install f-try-catch
```

or using any other package manager you use in your project.

## Usage

Using this package is so simple, you just wrap your function with `cleanFunction`.

### For Asynchronous Functions

```typescript
import { cleanFunction } from "f-try-catch";

const sum = cleanFunction(async (a: number, b: number) => {
    // do anything you want here
    return a + b;
});

const { data, error } = await sum(1, 2);

if (error === null) {
    console.log(data); // number (3)
} else {
    // handle errors as you want
    console.error(error);
}
```

### For Synchronous Functions

```typescript
import { cleanFunctionSync } from "f-try-catch";

const mySyncFunction = cleanFunctionSync((a: number, b: number) => {
    return a + b;
});

const { data, error } = mySyncFunction(1, 2);

if (error === null) {
    console.log(data); // number (3)
} else {
    // handle errors as you want
    console.error(error);
}
```

Made with ❤️ by Kais Radwan
