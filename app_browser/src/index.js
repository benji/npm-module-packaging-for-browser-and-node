const module3 = require('module3')

document.addEventListener('DOMContentLoaded', () => {
  console.log('document loaded')
  document.getElementById('thebutton').onclick = function () {
    console.log('button clicked')
    alert(module3.getSecretMessage())
  }
})