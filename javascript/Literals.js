//'use strict';

// Null Literal
console.log("Null Literal");
console.log(null);
console.log();

// Boolean Literal
console.log("Boolean Literal");
console.log(true);
console.log(false);
console.log();

// Numeric Literals
console.log("Numeric Literals");
console.log("decimal:               " + 56);        // decimal 
console.log("binary                 " + 0b10011);   // binary (=19)
console.log("hexadecimal            " + 0xF);       // hexadecimal (=15)
console.log("octal                  " + 0o75);      // octal (=61) => not allowed in strict mode
console.log("leading zero octal:    " + 0477 + "    // decimal with leading zero parsed as octal if all digits after the leading 0 are smaller then 8");
console.log("leading zero decimal:  " + 0478);
console.log();

// Object Literals
console.log("Object Literals");
var o = { a: 'foo', b: 'bar', c: 42 };
console.log(o);

var a = 'foo', b = 'bar', c = 42;       // shorthand notation. New in ES2015
var o = { a, b, c };
console.log(o);

var o = { a: a, b: b, c: c };           // instead of
console.log(o);
console.log();

// Array Literals
console.log("Array Literals");
console.log([1954, 1974, 1990, 2014]);
console.log();

// String Literals
console.log("String Literals");
console.log("foo");
console.log('bar');
console.log();

// Hexadecimal Escape Sequences
console.log("Hexadecimal Escape Sequences");
console.log('\xA9');    // "©"
console.log();

// Octal Escape Sequences DEPRECATED IN ES5
console.log("Octal Escape Sequences -- !DEPRECATED IN ES5!")
console.log('\251');
console.log();

// Unicode Escape Sequences
console.log("Unicode Escape Sequences");
console.log('\u00A9');
console.log();

// Unicode Code Point Escapes
console.log("Unicode Code Point Escapes");
console.log("\u{2F804}");
console.log();

// Regular Expression Literals
console.log("Regular Expression Literals");
console.log("/ab+c/g");
console.log();

// Template Literals
console.log("Template Literals");
var expression = 5 * 2;
console.log(`string text ${expression} string text`);
console.log();