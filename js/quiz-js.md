# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：<br>
1.常量使用大写字母命名；变量、函数、方法使用驼峰命名法。<br>
2.将浮点数转为整数运算可以解决一定程度上的浮点数运算精度问题<br>
3.可以使用use strict消除一些JS语法中的不严谨行为，增加代码可靠性。<br>
4.警惕使用eval()函数，可以提高代码安全性。<br>

## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO';
};
```

答：<br>获取存储在浏览器中的loglevel数据，若值为null或undefined则返回‘INFO’
