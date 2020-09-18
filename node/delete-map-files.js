const fs  = require("fs");
const path = require("path")
/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
  // 请实现……
  let files=[];
  if(fs.existsSync(p)){
    files=fs.readdirSync(p);
    files.forEach(function(file,index){
      let currentPath=path.join(p,file);
      if(fs.statSync(currentPath).isDirectory()){
        deleteMapFiles(currentPath);
      }else{
        if(/.map$/.test(file)){
          fs.unlinkSync(currentPath);
        }
      }
    })
  }
};
deleteMapFiles('/Users/haopan/Desktop/quiz-simple/node/playground')
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
