# Orchestra

A dependency-free, Typescipt-first, pure-function `String` manipulation library

[![NPM]](https://img.shields.io/npm/v/@juliancoleman/orchestra.svg)
[![Build Status](https://semaphoreci.com/api/v1/juliancoleman/orchestra/branches/master/badge.svg)](https://semaphoreci.com/juliancoleman/orchestra)
[![Maintainability](https://api.codeclimate.com/v1/badges/392fba3ab70c70e4ebb9/maintainability)](https://codeclimate.com/github/juliancoleman/orchestra/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/392fba3ab70c70e4ebb9/test_coverage)](https://codeclimate.com/github/juliancoleman/orchestra/test_coverage)
[![codecov](https://codecov.io/gh/juliancoleman/orchestra/branch/master/graph/badge.svg)](https://codecov.io/gh/juliancoleman/orchestra)

# Usage

## Installation

Thank you for checking out Orchestra! To add Orchestra to
your project, simply run the following:

```bash
# yarn
yarn add @juliancoleman/orchestra

# npm
npm i @juliancoleman/orchestra
```

# Contribute

## Installation

Feel free to clone or fork this repo to start out. Once
you're there, go ahead and run the following command(s):

```bash
# yarn
yarn

# npm
npm i
```

## Testing

#### Note:

If you run into the following error while running the test
suite on MacOS:

```sh
$ jest --config ./jest.config.js -i --watch

Error: `fsevents` unavailable (this watcher can only be used on Darwin)
```

then run the following:

```bash
brew install watchman
```

### Test suite

The backbone of Orchestra's test suite is [Jest](https://facebook.github.io/jest/).
I chose `Jest` over `mocha` / `chai`. The set up is stupid
simple and includes its own [matchers](https://facebook.github.io/jest/docs/en/expect.html)
library, allowing me to use only one dev-dependency
instead of two, resulting in smaller overhead.

You can run all tests in `Orchestra` by simply running:

```bash
# yarn
yarn test

# npm
npm run test
```

This command will spin up Jest, run all tests, and watch
for additional changes to files. The watcher will restart
if it detects a change in any `.js` or `.ts` file.

> On the first run of Jest, it may report `0 suites found`.
> Just hit `a` and let it find the suite.

### Coverage reporting

#### Local

To view a map of the coverage report, run the following:

```bash
# yarn
yarn coverage

# npm
npm run coverage
```

This command will spin up jest, run all tests, run a
coverage report, and print the report to the console.
**This command does not watch for file changes.**

If you want to view a map of the coverage report (outside
of Terminal), run the following command:

```bash
# yarn
yarn coverage:serve

# npm
npm run coverage:serve
```

This command will spin up Jest, run all tests, run a
coverage report, and spin up a server to view the coverage
report in the browser. Instructions for the URL will be
printed out when the server is ready. **This command does
not watch for file changes.**

#### Continuous Integration

A special command is used for Continuous Integration that
you won't need to worry about. Just know that it is there.

### Writing your own tests

Jest has a very familiar feel to the likes of mocha and
chai. To be as basic as possible, your test file will look
something like this...

```ts
describe("#myFunction", () => {
  it("passes the test", () => {
    expect(true).toBe(true);
  });
});
```

That wasn't so difficult, was it? Let's cover some more...

#### Creating a new Orchestra method

So, you have a great idea on a new function you would like
Orchestra to adopt. I appreciate the contribution!

1. Hop into the `lib/` directory and create a new folder
> The folder structure should look like the following
>
>     myFunction/
>       - myFunction.ts
>       - myFunction.spec.ts
>
> (don't worry about the `index.ts` files)
>
2. Begin creating your function.
   - Don't forget to utilize TypeScript and its type system.
   - _**Any contribution with missing types will be automatically rejected.**_
3. Test your function.
   - use the example above to get started.
   - write as many tests you feel are necessary (the more, the better!).
   - _**Leaving the demo `describe` block in your test file will also earn you a rejection.**_
4. Upon completion of the function and its tests, run the following command:

```bash
# yarn
yarn generate-barrels

# npm
npm run generate-barrels
```

This will automatically add an `index.ts` file to your new
folder, as well as add your new function to the list of
Orchestra's module exports. You won't need to worry about
populating the `index` as [barrelsby](https://github.com/bencoveney/barrelsby)
has already taken care of that for you. If you're
unfamiliar with the [barrel pattern](https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md),
I can't recommend reading up on it enough.

You can then do something like this in a project that uses
Orchestra as a dependency:

```ts
import { myFunction } from "orchestra";
```
