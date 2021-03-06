const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 3 * * 0',function(){ //o codigo foi feito 3 da manha de um domingo, como teste eu troquei de 3 para 4 da manha, o software reconheceu e ficou esperando dar 4 da manha pra funcionar
    console.log(`executando tarefa 1:`, new Date().getSeconds())
})
setTimeout(function(){
    tarefa1.cancel()
    console.log(`cancelando tarefa 1`)
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek - [new schedule.Range(1,5)]
regra.hour = 3
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log(`executando tarefa 2`, new Date().getSeconds())
})