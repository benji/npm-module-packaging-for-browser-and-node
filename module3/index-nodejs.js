const module2 = require('mymodule2')

module.exports = {
  getSecretMessage: function () {
    console.log('module3 - getSecretMessage')
    return "Module3: " + module2.getSecretMessage()
  }
}