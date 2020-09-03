# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：<br>
1.git clone 远程仓库url //克隆一个版本库到新的目录<br>
2.git branch -m master 远程开发仓库名 //重命名本地仓库<br>
3.git branch --set-upstream-to origin/远程开发仓库名 本地仓库名 //映射远程开发仓库到本地仓库<br>
4.git add . //将本地所有修改了的文件添加到暂存区<br>
5.git commit -m"注释" //介绍更新的内容<br>
6.git pull origin 远程分支名 //将远程最新代码与本地代码合并<br>
7.git push //提交更改<br>

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：<br>
1.可以使用git commit --amend -m "New commit message" 对提交过的信息进行修改<br>
2.追加提交时使用git commit --amend --no-edit可以不会有提交历史<br>
3.使用 git rebase -i  [startpoint]  [endpoint]可以合并多个commit为一个<br>
