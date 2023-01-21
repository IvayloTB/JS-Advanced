function sortNums (nums){
nums.sort((a,b)=>a-b);
let newNums=[];
for (let i = 0; i <= nums.length; i++) {
    const firstNum=nums.shift();
    const lastNum=nums.pop();
    newNums.push(firstNum);
    newNums.push(lastNum);
    i=0;
}

return newNums
}
sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56] )
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48] 