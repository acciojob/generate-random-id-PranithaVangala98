function makeid(l) {
  // write your code here
	let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234566789'
	let randomletters = ''
	for(let i=0;i<l;i++){
		randomletters += alphabets.charAt(Math.floor(Math.random()*alphabets.length)) 
	}
	return randomletters
}

// Do not change the code below.
const l = prompt("Enter a number.");

alert(makeid(l));
