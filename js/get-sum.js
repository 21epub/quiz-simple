/**
 * @description 求范围内（开区间） 3 的倍数的数字之和
 * @param {number[]} arr 排序或乱序的数组
 * @param {number} start 开始范围
 * @param {number} end 结束范围
 * @returns {number} 返回和
 */
const getSumOfTriple = (arr, start, end) => {
  // 请实现……
  const getSum = (total, num, index) => {
    // 对第一次值进行处理
    if (index === 1 && total % 3 !== 0) {
      total = 0
    }
    if (num % 3 === 0 && (num > start || !start) && (num < end || !end)) {
      return total + num
    } else {
      return total
    }
  }
  return arr.reduce(getSum)
}

// * ---------------- 实现的效果：

{
  const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6]

  //          [      3  9              6]

  console.log(getSumOfTriple(arr)) // => 18
}

{
  // * arr = [0, 7, 14, 21, ... , 987, 994]
  const arr = Array.from({length: 143}, (e, i) => i * 7)

  // 203, 210, 217, 224, 231, 238, ..., 455, 462, 469, 476, 483, 490, 497
  //      210            231       ...       462            483

  console.log(getSumOfTriple(arr, 200, 500)) // => 4851
}
