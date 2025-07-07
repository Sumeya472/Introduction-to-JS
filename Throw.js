function isPositive(a) {
    if (a > 0) {
        return 'YES';
    } else if (a === 0) {
       throw new Error('Zero Error'); 
    } else {
        throw new Error('Negative Error');
    }
}
function main() {
    const input = readLine().split('\n').map(Number);
    for(const num of input) {
        try {
            console.log(isPositive(num));
        } catch (e) {
            console.log(e.message);
        }
    }
}
