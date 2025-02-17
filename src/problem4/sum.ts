function sum_to_n_a(n: number): number {
	// your code here
	// Time complexity: O(1)
	// Space complexity: O(1)
    return n * (n + 1) / 2;
}

function sum_to_n_b(n: number): number {
	// your code here
	// Time complexity: O(n)
	// Space complexity: O(1)
	let total: number = 0;
	for(let i = 1; i <= n; ++i) {
		total += i;
	}
	return total;
}

function sum_to_n_c(n: number): number {
	// your code here
	// Time complexity: O(n)
	// Space complexity: O(n)
	if (n == 1 || n == 0) {
		return n;
	}
	return n + sum_to_n_c(n-1);
}