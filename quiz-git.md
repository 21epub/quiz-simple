# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？


请直接在这里作答。

答：

0.先fork为自己的，作为主分支的一个副本

1.拉取项目: `get clone '项目地址'` </br>

2.创建分支：`git checkout -b feature1-branch`

3.写完之后保存:

 3.1:添加到暂存区:`git add .` (如果这一步想撤销可以用`git rm -r --cached .`命令)
 
 3.2提交暂存区里面的文件`git commit -v`或者`git commit -m "info"`
 
 4.切换到主分支合并保存 `git checkout master` && `git merge feature1-branch`
 
 5.提交代码至远程仓库`git push`
 
 6.发起一个pull request,而后项目负责人就会对你提交的代码进行review,如果没问题就会通过否则就要继续更改直到通过为止
 
 
 
 



## Q2

你知道和用过哪些 Git 的方法论和技巧

答：

1:如果编辑了一段代码，而后发现之前的操作错了，但是没执行`git add  xxx`操作；

可以用`git checkout filename`这个命令,对应的文件就会恢复原样；



2:如何让自己的代码与源项目(上游仓库)同步

1).`git remote add upstream 上游仓库的url`

2).`git fetch upstream`


3:你想回到之前的任意一个commit(这个命令是说回退到指定的那个commitid重新开始coding)

`git reset --hard commitid`


4.切换到任意一个commit(注意这个命令与上面那个命令是有区别的,下面这个命令可以查看这个仓库到目前为止的任意一个状态,你可以查看到任意时刻任意代码是由谁编辑的，做了哪些操作)

`git checkout commitid`

5.查看提交的历史commit

`git reflog`

6.解决合并冲突的一些技巧

打开对应的文件，搜索`====`四个等于号

删除中间的`======`(往上删小于号(`<<<<`),往下删大于号(`>>>>`),选择要保留的行留下来)


7.获取远程仓库的最新代码

`git pull`


8.`.gitignore`文件失效的问题

是因为添加的忽略项已经被跟踪,解决方法:`git rm --cached filename`

注意点:`.gitignore`里面的文件一定要在这个文件第一次提交之前就必须写在`.gitignore`里面

9.切换到任意一个版本

``Git checkout v-x.y.z``

这个命令在阅读源代码的时候挺有用的，可以切换到仓库的初始版本，而后查看代码是如何一步一步变更的

10.`git push --force`

使用这个命令的注意点:在和别人共享的分支上面千万不要用`git push --force` ！！！！！(就是说当前如果在master主分支上面的时候千万不要用这条命令)

还有很多，限于篇幅，这里就不多分享了
