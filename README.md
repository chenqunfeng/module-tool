# ts-lint-tool

## 描述

基于VSCode编辑器，集成editorConfig、prettier、tslint、pre-commit，以达到自动化规范项目代码的目的，让代码编写更加舒畅。

## 准备

1. Visual Studio Code 编辑器
2. 在VSCode中安装插件EditorConfig for VS Code
3. 在根目录下执行 ```npm install```

完成以上操作之后，便可以在```src```目录下进行代码编写。

## 注意事项

1. 建议打开Visual Studio Code的editor.formatOnSave选项，以便保存时可以自动格式化
2. ```git commit -m "xxx"```时默认会使用tslint检测代码规范，如果想跳过检查可以添加```-n```参数

