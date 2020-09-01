/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
  const fs = require('fs')
  const path = require('path')
  const deleteFile = (p) => {
    fs.readdirSync(p).forEach((file) => {
      const pathname = path.join(p, file)
      if (fs.statSync(pathname).isDirectory()) {
        deleteFile(pathname)
      } else if (path.extname(pathname) === '.map') {
        fs.unlinkSync(pathname)
      }
    })
  }
  deleteFile(p)
  // 请实现……
}
deleteMapFiles('./playground')
// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
