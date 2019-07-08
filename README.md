# Orchestra

A dependency-free, Typescipt-first, pure-function `String` manipulation library

[![NPM](https://img.shields.io/npm/v/@juliancoleman/orchestra.svg)](https://npmjs.com/package/@juliancoleman/orchestra)

[![Build Status](https://semaphoreci.com/api/v1/juliancoleman/orchestra/branches/master/badge.svg)](https://semaphoreci.com/juliancoleman/orchestra)
[![Build Status](https://travis-ci.com/juliancoleman/orchestra.svg?branch=master)](https://travis-ci.com/juliancoleman/orchestra)

[![Maintainability](https://api.codeclimate.com/v1/badges/392fba3ab70c70e4ebb9/maintainability)](https://codeclimate.com/github/juliancoleman/orchestra/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/392fba3ab70c70e4ebb9/test_coverage)](https://codeclimate.com/github/juliancoleman/orchestra/test_coverage)

[![codecov](https://codecov.io/gh/juliancoleman/orchestra/branch/master/graph/badge.svg)](https://codecov.io/gh/juliancoleman/orchestra)

## Usage

### Installation

```bash
# yarn
yarn add @juliancoleman/orchestra

# npm
npm i @juliancoleman/orchestra
```

## Contribute

### Fork & Clone

Feel free to fork and clone this repo to start out. Once
cloned, go ahead and run one of the following commands:

```bash
# yarn
yarn

# npm
npm i
```

### Testing

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

#### Local (Terminal)

To view a map of the coverage report, run the following:

```bash
# yarn
yarn coverage

# npm
npm run coverage
```

This spins up jest, runs all tests, runs a
coverage report, and prints the report to the console.
**This command does not watch for file changes.**

#### Local (Browser)

```bash
# yarn
yarn coverage:serve

# npm
npm run coverage:serve
```

This spins up Jest, runs all tests, runs a
coverage report, and spins up a web server, generating a
URL when the server is ready. **This command does not watch
for file changes.**

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

#### Creating a new Orchestra method

So, you have a great idea on a new function you would like
Orchestra to adopt. I appreciate the contribution!

1. Hop into `lib/` and create a new folder

> The folder structure should look like the following
>
>     myFunction/
>       - myFunction.ts
>       - myFunction.spec.ts
>
> (don't create any `index.ts` files)
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
