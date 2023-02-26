# slunce-ui 安装指南
 
## 安装插件
 
```
npm install slunce-ui
或：yarn add slunce-ui
```
 
## 引入并注册插件
 
```TypeScript
// 全部引入
import SlunceUI from 'slunce-ui'
import 'slunce-ui/dist/style.css'
 
app.use(SlunceUI)
 
// 按需引入
import slButton from 'slunce-ui'
import 'slunce-ui/dist/style.css'
 
app.use(slButton)
```
 
## 在项目中使用(示例)
 
```HTML
<slButton>This is a button.</slButton>
```