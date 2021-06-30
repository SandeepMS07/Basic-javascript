import  { capitalizeString } from "./exportfun";
const cap = capitalizeString("hello!");

console.log(cap);

//* to import
import * as capitalizeStrings from "capitalizeStrings"; 


//import a default export
import subtract from "exportfun";
subtract(7, 4);