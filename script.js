const makeChange = (c) => {
  // your name here
	res={};
	c=Number(c);
	res.q=c/25; c%=25;
	res.d=c/10; c%=10;
	res.n=c/5; c%=5;
	res.p=c/1;
	
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
