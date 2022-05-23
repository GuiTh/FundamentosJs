const _ = require('lodash') //nao precisa ser colocado o caminho, o node ja procura dentro da pasta node_modules por padrao
setInterval(()=> console.log(_.random(500.600)),2000)
//rs restarta o nodemon