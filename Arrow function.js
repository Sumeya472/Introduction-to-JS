 const modifyArray = (nums) => {
        return nums.map(num => num % 2 === 0 ? num * 2 : num * 3);
};
    function main() {
        try{
        const n = parseInt(readLine());
        const nums = readLine().split(' ').map(Number);
        const result = modifyArray(nums);
        console.log(result.join(' '));
        } catch (error) {
        console.log(' ');
    }
 }
