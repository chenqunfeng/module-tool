# module-tool

## 描述

基于VSCode编辑器，集成editorConfig、prettier、tslint、mocha、pre-commit，以达到自动化规范和测试项目代码的目的，让代码编写更加舒畅。

## 结构
```
-- src            // 项目代码
-- test           // 测试代码
-- .editorconfig  // 规范编辑器格式
-- .gitignore     // git提交的忽视文件和目录
-- .prettierrc    // 规范代码格式
-- .package.json  // npm描述文件
-- README.md      // 项目描述文件
-- tsconfig.json  // typescript配置文件
-- tslint.json    // tslint配置文件
```

## 准备

1. Visual Studio Code 编辑器
2. 在VSCode中安装插件EditorConfig for VS Code
3. 在根目录下执行 ```npm install```

## 注意事项

1. 建议打开Visual Studio Code的editor.formatOnSave选项，以便保存时可以自动格式化
2. ```git commit -m "xxx"```时默认会使用tslint检测代码规范并执行对应的代码测试，如果想跳过检查可以添加```-n```参数

