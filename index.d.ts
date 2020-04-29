/**
Compute an object ID like `git hash-object`.
@param input The input to compute.
@example
```
const gitHashObject = require("git-hash-object");

gitHashObject("Hello World");
//=> "5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689"
```
*/
declare function gitHashObject(input: string): string

export = gitHashObject
