# SlunceUI 安装指南
 
## 安装插件
 
```
npm install slunceui
或：yarn add slunceui
```
 
## 引入并注册插件
 
```TypeScript
// 全部引入
import SlunceUI from 'slunceui'
import 'slunceui/dist/style.css'
 
app.use(SlunceUI)
 
// 按需引入
import asButton from 'SlunceUI'
import 'SlunceUI/dist/style.css'
 
app.use(asButton)
```
 
## 在项目中使用(示例)
 
```HTML
<asButton>This is a button.</asButton>
```