const module1 = require('module1')

module.exports = {
  getSecretMessage: function () {
    console.log('module2 - getSecretMessage')
    return "Module2: " + module1.getSecretMessage()
  }
}