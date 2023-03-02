import { createVNode, render } from "vue";
import slMessage from './message.vue'

export default ({text, type='info', timeout=2500}) => {
  document.querySelector('.sl-message-container')?document.body.removeChild(
    document.querySelector('.sl-message-container')
  ):''
  const div:HTMLDivElement = 
    typeof document !== 'undefined'
    ? typeof document.createElement !== 'undefined'
      ? document.createElement('div')
      : undefined
    : undefined
  div.setAttribute('class', 'sl-message-container')
  if(typeof document !== 'undefined') {
    document.body.appendChild(div)
  }

  let timer = null
  const vnode = createVNode(slMessage, {text, type, timeout}, [text])

  render(vnode, div)

  clearTimeout(timer)

  timer = setTimeout(() => {
    render(null, div)
    if (typeof document !== 'undefined') {
      document.body.removeChild(div)
    }
    clearTimeout(timer)
  }, timeout)
}