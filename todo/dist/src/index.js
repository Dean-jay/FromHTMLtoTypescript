"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = void 0;
console.log('Try npm run lint/fix!');
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = 'am I tabbed?';
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    return;
}
exports.doSomeStuff = doSomeStuff;
// TODO: more examples
//# sourceMappingURL=index.js.map