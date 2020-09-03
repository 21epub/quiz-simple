/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
  // 请实现……
  const fs = require("fs")
  function readDirSync(p){
      let pa = fs.readdirSync(p);
      pa.forEach(function(ele,index){
          let info = fs.statSync(p+"/"+ ele)	
          if(info.isDirectory()){
              readDirSync(p+"/"+ ele);
          }else{        
              let reg = RegExp(/\.map$/);
              if(ele.match(reg)){
                  fs.unlink(p+"/"+ele, function(err){
                      if(err){
                       throw err;
                      }
                      console.log('文件:'+ ele +'删除成功！');
                  })    
              }
          }	
      })
  }
  readDirSync(p);
};

deleteMapFiles('./playground');
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
