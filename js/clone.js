// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// 回答：是基本类型的话就直接给对象赋值
//       不是基本类型的话：以数组为为例就是进行遍历，循环赋值

//       克隆一般又分为深浅克隆
//       浅克隆：Object.assign
//       深克隆：通过调用JSON.parse()

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……
function clone(params) {
  let person = JSON.parse(JSON.stringify(params))
  console.log(params)
  console.log(data)
  return person
}
// * ---------------- 实现的效果：

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
