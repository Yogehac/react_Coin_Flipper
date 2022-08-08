let choice = (arr) => {
	let len = arr.length;
	return arr[Math.floor(Math.random() * len)];
};

export { choice };
