// Operators Armithmetic

// console.log(5+7);
// console.log(7-9);
// console.log(4*2);
// console.log(10/2);
// console.log(20%2);// Remainder
// console.log(4**5);

// Assignment Operators

// let x = 40;
// let y = 20;
// x = x+y;
// x = x-y;
// x = x*y;
// x+=y;
// x = x/y;
// x%=y;
// console.log(x);

// Comparison operators

// let x = 30;
// let y = "30";

// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x==y); // Both values should be same.
// console.log(x===y); // Both values and their types should be same.

// Number and string compare(string convert number)
// let a = "140";
// let z = Number(a);
// console.log(a);

// NaN: Not a number(Type of it is number).

// let a = "121ac";
// let b = Number(a);
// console.log(b); //
// console.log(typeof b);// if we are convert number and character, then it return NaN.

// let a = true;
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // null is convert to 0 value.
// console.log(Number(undefined)); // undefined is convert to NaN.

// Number convert into string.
// let a = 10;
// let b = String(a);
// console.log(b);// 10
// console.log(typeof b);// it return number

// If we are convert string in Boolean, null and undefined.

// console.log(String(true));// it return true and typeof string return string.
// console.log(String(false));// it return false and typeof string return string.
// console.log(String(undefined));// it return undefined and typeof string return string.
// console.log(String(null));// it return null and typeof string return string.

// If we are convert boolean to number, string, null and undefined so what will happen?

// console.log(Boolean(10));// in case of postive and negative number, it always return true.
// console.log(Boolean(0));// in case of 0, it return false.
// console.log(Boolean(undefined));// in case of undefined, it return false.
// console.log(Boolean(null));// in case of null, it return false.

// Computer Science Challenge.

// let a = 0.1;
// let b = 0.2;
// let c = a + b;// 0.30000000000000004
// console.log(c);
// console.log(c == 0.3);// It returns false.

// If we are working with decimal value in any computer science language that is difficult to handle decimal values (0.1+0.2= 0.30000000000000004) to solving these type of problem we can use binary number system but in this case we can use approximately result is stored.

// example -     0.25==Binary Number         ans- 0.01

//        0.25*2 = 0.5 (0)
//        0.5*2 = 1.0 (1)

//        but in case of 0.2

//        0.2*2 = 0.4 (0)
//        0.4*2 = 0.8 (0)
//        0.8*2 = 1.6 (1)
//        0.6*2 = 1.2 (1)

//        0.2*2 = 0.4 (0)
//        0.4*2 = 0.8 (0)..............0.001100 this list will be repeat and become endless. So 0.2 is not converted in binary and 0.1 is also not converted in binary

// if we want to solve this problem (0.1+0.2 = User see output result is 0.3) user give me value 0.1 and 0.2 so them we can consider as a string ("0.1" +"0.2" = "0.3") then we treated as a character and character convert to number them convert to string.

//   String to character to number to string
// 0.1 = "0.1" - 1 - 1
// 0.2 = "0.2" - 2 - 2

// ......Loose Equality and Comparison Operators with Null/Undefined.....

// 1. Null is loosely equal to undefined.

// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(null==0);// false
// console.log(null==false);// false
// console.log(null==true);// false

// ..In the case of operators ( >,<,>=,<= ) null will convert into a number (null equivalent value is 0) and undefined convert is NaN.

// console.log(null>=0); // true
// console.log(null<=0); //true
// console.log(null>0); //false
// console.log(null<0); // false
// console.log(null>=undefined); //false
// console.log(undefined>=0); // false

// console.log("Rohit">"Mohit");// true ........check ascii value R- 82 M- 77. agar first word same hoga toh 2 word check krne hai.

// Ek koi bhi type hai, usko agar mujhe compare karna hai durse kisi type se
// Dono ko number mein convert honge

// Null and "" is value become 0.

//console.log(NaN==NaN);// false
