
//export fun
export const capitalizeString = str => str.toUpperCase()


//use export to Reuse a Code Block
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";


//create am Export fallback with export default
export default function subtract(x,y) {return x - y;}

