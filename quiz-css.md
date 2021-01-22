# CSS 的使用

如果你最近不常写 CSS，那么写上简单的文字说明也行，  
如果你常写 CSS，那么附上简单的 Demo 代码更好。

Demo 代码可以新建一个或多个文件（不限），  
例如新建一个 `writing-style.css`，并在其中完成。

## Q1

下面是 PostCSS 编译后生成的代码，如果你来写源码，你会怎么写。
（实现方式不限，比如可以用 CSS in JS、Vue style 等方式）

```css
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.container > div:nth-child(1) {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
```

## Q2

你用过哪些 CSS 的方法论和工具  
简单描述即可，例如：

> - PostCSS + autoprefixer 用来编译 CSS 代码，提高部分 CSS 的浏览器兼容性。
>
> - BEM 是用来处理 class 命名的，有一个三段式命名规则，形如 ↓：
>
> ```css
> .form--theme-xmas {
> }
> ```

答：
CSS 的方法论:
1.命名的模块化:</br>
确保全局空间下一级域名不冲突，那么子域名就被限定在了独立的局部作用域中，从而保证命名的唯一性。
比如:
```css
.fui-form {
  &-table {
  }

  &-label {
  }
}


```
2.稍微了解过BEM,
看下面这个关于BEM命名常规的例子:
```html
<form class="form form--theme form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```