function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.sqrt(a) + Math.sqrt(b));
}
x = abTest(-2, 2);
console.log(x); 