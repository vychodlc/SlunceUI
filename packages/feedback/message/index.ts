import { createVNode, render, h } from "vue";
import slMessage from './message.vue'

export default ({text, type='info', timeout=2000, close=false}) => {
  document.querySelector('.sl-message-container') ? document.body.removeChild(
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
    if(typeof div !== 'undefined') {
      document.body.appendChild(div)
    }
  }

  let timer = null
  const vnode = createVNode(slMessage, {text, type, timeout, close}, [text])

  render(vnode, div)

  clearTimeout(timer)

  timer = setTimeout(() => {
    render(null, div)
    if (typeof document !== 'undefined') {
      if(typeof div !== 'undefined') {
        document.body.appendChild(div)
      }
    }
    clearTimeout(timer)
  }, timeout)
}