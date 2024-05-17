// Unknown Type: The unknown type in TypeScript was introduced in version 3.0 as a type-safe replacement for the any type. The unknown type represents a value whose type is not known. This can be useful when working with values that come from external sources, such as user input or data from an API.


function multiByTwo(number: unknown) {
    if (typeof number === "number") {
      return number * 2;
    }
    return "Please provide a valid number";
}
  
console.log(multiByTwo(4));
console.log(multiByTwo("john"));