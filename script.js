//your JS code here. If required.
let a = prompt();
let ans = 1;
for(let i = 2; i<=a; i++)
	ans *= i;
alert(`The factorial of ${a} is ${ans}`);