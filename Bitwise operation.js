function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a<= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let current = a & b;
            if (current < k && current > max) {
                max = current;
                if (max === k - 1) return max; {
                }
            }
        }
        return max;
    }
}
function main() {
    const q = parseInt(readLine());
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        console.log(getMaxLessThanK(n, k));
    }
}
