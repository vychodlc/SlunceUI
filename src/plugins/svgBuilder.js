import { readFileSync, readdirSync, writeFile } from 'fs'

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g

const clearReturn = /(\r)|(\n)/g

function findSvgFile(dir) {
  const svgRes = []
  const dirents = readdirSync(dir, {
    withFileTypes: true
  })
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/'))
    } else {
      const svg = readFileSync(dir + dirent.name)
          .toString()
          .replace(clearReturn, '')
          .replace(svgTitle, ($1, $2) => {
            let width = 0
            let height = 0
            let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
              if (s2 === 'width') {
                width = s3
              } else if (s2 === 'height') {
                height = s3
              }
              return ''
            })
            if (!hasViewBox.test($2)) {
              content += `viewBox="0 0 ${width} ${height}"`
            }
            return `<symbol id="${idPerfix}-${dirent.name.replace('.svg', '')}" ${content}>`
          })
          .replace('</svg>', '</symbol>')
          .replace('\'', '\"')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export const svgBuilder = (path, perfix = 'icon') => {
  if (path === '') return
  idPerfix = perfix
  const res = findSvgFile(path)
  const joinRes = res.join('').replace('\'','\"')
  const jsContent = `!function(i){var c,o='<svg>${joinRes}</svg>',l=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss");if(l&&!i.__iconfont__svg__cssinject__){i.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}!function(c){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(c,0);else{var l=function(){document.removeEventListener("DOMContentLoaded",l,!1),c()};document.addEventListener("DOMContentLoaded",l,!1)}else document.attachEvent&&(h=c,e=i.document,z=!1,(o=function(){try{e.documentElement.doScroll("left")}catch(c){return void setTimeout(o,50)}t()})(),e.onreadystatechange=function(){"complete"==e.readyState&&(e.onreadystatechange=null,t())});function t(){z||(z=!0,h())}var h,e,z,o}(function(){var c,l,t,h,e,z;(c=document.createElement("div")).innerHTML=o,o=null,(l=c.getElementsByTagName("svg")[0])&&(l.setAttribute("aria-hidden","true"),l.style.position="absolute",l.style.width=0,l.style.height=0,l.style.overflow="hidden",t=l,(h=document.body).firstChild?(e=t,(z=h.firstChild).parentNode.insertBefore(e,z)):h.appendChild(t))})}(window);`
  writeFile(
    './packages/basic/icon/src/icon.js',
    jsContent,
    (error) => {
      if(error){
          console.log(`创建失败：${error}`)
    }}
  )
  return {
    name: 'svg-transform',
    transformIndexHtml(html) {
      return html.replace(
          '<body>',
          `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `
      )
    }
  }
  // return true
}