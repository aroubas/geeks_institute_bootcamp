//// #1
// Output : 3
// Explanation: The variable 'a' is initialized at 5. Since 5 > 1, the code 
// enters the 'if' block and reassigns 'a' to 3. The alert displays 3.
// #1.2: If declared with const, the code would throw a TypeError because 
// const variables cannot be reassigned (a = 3 would fail).

//// #2
// for funcThree() first call: 0
// for funcThree() second call: 5
// Explanation: at first , 'a' is 0 in the global scope. The first funcThree() 
// alerts 0. Then, funcTwo() is called, which reassigns the global 'a' to 5. 
// The second funcThree() call reflects this change and alerts 5.
// #2.2: If declared with const, funcTwo() would throw a TypeError when 
// attempting to reassign the global constant 'a'. 

// #3
// op: "hello"
// Explanation: funcFour() assigns "hello" to the window object (global scope). 
// When funcFive() runs, it looks for 'a', finds it on the global window object, 
// and alerts "hello".

// // #4 Explanation:
// This is "Shadowing." 
// Inside the function, we create a new local variable named 'a'.
// The function uses the version closest to it ("test") and ignores 
// the global version (1). They are two different variables with the same name.

// #5
// Output: 5 (inside block), 2 (outside block)
// Explanation: This is "Block Scoping." The 'let'  creates a 
// temporary version of 'a' that only exists inside the if-statement's 
// curly braces { }. Once the code reaches the closing brace, that 
// temporary 'a' is deleted, leaving the original 'a = 2' untouched.
// #5.2: If declared with const, the behavior would be IDENTICAL.
// Both variables would stay trapped in their own "worlds" (scopes),
// the only difference is you wouldn't be able to change them later.