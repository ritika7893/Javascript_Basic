/*== (Loose Equality)
Compares values only

Converts (coerces) different types before comparison*/
'5' == 5      // true  -> string is converted to number
false == 0    // true  -> false becomes 0
null == undefined // true
/*✅ === (Strict Equality)
Compares values AND types

No type conversion

*/
'5' === 5     // false -> different types
false === 0   // false -> different types
null === undefined // false
5 === 5       // true
