快速构建一个项目

首先确认熟悉fis3的基本使用方法。 安装fis3工具：

```
npm install fis3 -g
```
安装插件：(在项目根目录执行，通过package.json文件配置)
```
npm install
```
目录结构说明
```
web
    static
        tpl                         -- 静态模版
        js                          -- 页面脚本
        css                         -- 样式scss文件等
        fonts                       -- 图标字体
        img                         -- 图片
        widget                      -- 通用模块组件
    page                            -- 静态页面
    fis-conf.js                     -- fis3配置文件
    package.json                    -- 项目配置文件
```

模块说明 创建窗口模块举例
```
var $ = require("zepto");
function Dialog(content, options) {
    
}
module.exports = Dialog;
```

展示的页面index.html

```
<!DOCTYPE html>
<html>
<head>
    <link rel="import" href="/page/common/header.html?__inline">
    <title>优分期－让美好即刻发生</title>
    <link rel="stylesheet" href='/static/css/common/header.scss'>
    <link rel="stylesheet" href='/static/css/common/tablist.scss'>
    <link rel="stylesheet" href='/static/css/common/star.scss'>
    <link rel="stylesheet" href='/static/css/common/itemsDetail.scss'>
</head>
<body>
<div class="header">
</div>
	<ul class='tablist' id='tablist'>
		<li class='tabli activeLi'>进行中</li>
		<li class='tabli'>待审核</li>
		<li class='tabli'>已结束</li>
	</ul>
	<div class='tabDiv'></div>
	<div class='star'></div>
	<div class='getStar'></div>
	<div class='itemsDetail'></div>
    <script src="/static/js/example/example.js"></script>
</body>
</html>
```
这时候运行刚刚完成的 example.html。

构建说明
```
package.json
fis-conf.js
```

启动工程

```
fis3 release

fis3 server start
```

实时监听

```
fis3 release -wL
```

node 版本 4.2.1v

如node 安装的最近版本需要制定运行版本

```
nvm install v4.2.1
```

本工程是公司项目。。为保证公司代码安全已删掉关键代码。
但目录是完整的。。实例为公用部分的提取

http://127.0.0.1:8080/page/example/example.html




