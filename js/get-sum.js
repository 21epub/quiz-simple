/**
 * @description 求范围内（开区间） 3 的倍数的数字之和
 * @param {number[]} arr 排序或乱序的数组
 * @param {number} start 开始范围
 * @param {number} end 结束范围
 * @returns {number} 返回和
 */
const getSumOfTriple = (arr, start, end) => {
    // 请实现……(这条题目我用了两种方法)
    //方法1：
    // if(arguments.length===1){
    //   let sum = 0;
    //   console.log("实际传入的参数个数: "+arguments.length)
    //   for(let i = 0;i<arguments[0].length;i++){
    //     if (arguments[0][i]%3==0){
    //       sum+=arguments[0][i];
    //     }
    //   }
    //
    //   console.log(sum)
    // }
    // if(arguments.length===3){
    //   let sum = 0;
    //   console.log("实际传入的参数个数: "+arguments.length)
    //   for(let j = 0;j<arguments[0].length;j++){
    //     if(arguments[0][j]%3==0 && arguments[0][j]>arguments[1] && arguments[0][j]<arguments[2]){
    //       sum+=arguments[0][j]
    //     }
    //   }
    //   console.log(sum)
    // }

    //方法2
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (start && end) {
        return arr.filter(item => item > start && item < end).filter(item => item % 3 === 0).reduce(reducer)
    } else {
        return arr.filter(item => item % 3 === 0).reduce(reducer)
    }

};

// * ---------------- 实现的效果：

{
    const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6];

    //          [      3  9              6]

    console.log(getSumOfTriple(arr)); // => 18
}

{
    // * arr = [0, 7, 14, 21, ... , 987, 994]
    const arr = Array.from({length: 143}, (e, i) => i * 7);

    // 203, 210, 217, 224, 231, 238, ..., 455, 462, 469, 476, 483, 490, 497
    //      210            231       ...       462            483

    console.log(getSumOfTriple(arr, 200, 500)); // => 4851
}
