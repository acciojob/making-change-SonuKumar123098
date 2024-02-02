const makeChange = (c) => {
  // your name here
	res={};
	c=Number(c);
	res.q=Math.floor(c/25); c%=25;
	res.d=Math.floor(c/10); c%=10;
	res.n=Math.floor(c/5); c%=5;
	res.p=c/1;
	return res;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
