// Types In TypeScript


// any
// The any type in TypeScript is a generic type that disables type checking for a variable. This means that you can assign any value to a variable of type any, and TypeScript will not give you any errors.

function multiply(numbers){   // Parameter numbers imlicitely has any types
    return numbers * 2   
}

let firstName: any = "XYZ";

firstName = 123;

firstName = [1,2,3]