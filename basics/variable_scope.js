let var1 = "varOne";
if (true) {
  console.log(var1);
  let varTwo = "varTwo";
  console.log(varTwo);
}
console.log(varTwo);

// js scoping rules
// js uses Lexical Scope (static Scope)
// global variables --> outside code blocks
// local variables --> inside code blocks
// in a scope you can access variables defined in the scope or variables defined in parent/ancestor blocks
