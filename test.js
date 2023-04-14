const { parse } = require('@typescript-eslint/parser');
async function nazwa(){
    return;
}
const code = `endpoint function test() {
    return true;
   }

   process function test2(){
    return true;
   }`

// endpoint function test() {
//  return true;
// }

// process function test2(){
//  return true;
// }
const ast = parse(code)
console.log(ast)