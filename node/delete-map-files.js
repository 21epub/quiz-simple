/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
    // 请实现……
    let fs = require("fs");
    let path = require("path");
    if (fs.existsSync(p)) {
        //获取指定目录下所有文件名称
        let arr_files = fs.readdirSync(p);

        arr_files.forEach((file) => {
                //获取当前文件(目录名称)
                let currentpath = path.join(p, file);
                if (fs.statSync(currentpath).isDirectory()) {
                    //当前文件为目录,递归寻找
                    deleteMapFiles(currentpath)
                } else {
                    if (file.endsWith(".map")) {
                        fs.unlinkSync(currentpath)
                        console.log("文件: " + currentpath + " 已经删除");
                    }
                }
            }
        )
    } else {
        console.log("当前路径不存在");
    }
};

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
