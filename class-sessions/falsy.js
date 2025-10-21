//function to log out truthyness

// const isTruthy = (name, exp) => {
//     console.log(`${name}: ${Boolean(exp)}`);
// }

function isTruthy(name, exp) {
    console.log(`${name}: ${Boolean(exp)}`);
}

//Numbers
// isTruthy("0", 0);
// isTruthy("0", -0);
// isTruthy("not 0", 1);
// isTruthy("bigint numbers", 1n);

//Boolean, NaN, undefined, null
// isTruthy("NaN", NaN);
// isTruthy("undefined", undefined);
// isTruthy("null", null);
// isTruthy("false", false);
// isTruthy("true", true);

//Strings
isTruthy("Empty string", "");
isTruthy("Non empty string", "ascsdvdgr");
isTruthy("Boolean string false", "false");

//Objects
isTruthy("Object", {});
isTruthy("Object", {a: "a", b: "b"});
isTruthy("Object", Object());

//Undefined variables

