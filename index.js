const moment = require('moment')

const args = process.argv.slice(2);

if(args.length == 3) {
  
  const callRoom = args[1]
  const travelDuration = args[2]

  let timeStamps = []

  let competitionMoment = moment(args[0], 'H-m')
  timeStamps.push(competitionMoment.format("HH:mm [- race] "))

  let callRoomMoment = moment(args[0], 'H-m').subtract(callRoom, 'minutes')
  timeStamps.push(callRoomMoment.format("HH:mm [- callroom ]"))

  let caffeineMoment = moment(args[0], 'H-m').subtract(45, 'minutes')
  timeStamps.push(caffeineMoment.format("HH:mm [- caffeine]"))

  let warmupMoment = callRoomMoment.subtract(60, 'minutes')
  timeStamps.push(warmupMoment.format("HH:mm [- warmup]"))

  let travelMoment = warmupMoment.subtract(travelDuration, 'minutes')
  timeStamps.push(travelMoment.format("HH:mm [- to track]"))
  
  let bicarbonaatMoment3 = competitionMoment.subtract(90, 'minutes')
  timeStamps.push(bicarbonaatMoment3.format("HH:mm [- bicarbonaat]"))
  
  let bicarbonaatMoment2 = bicarbonaatMoment3.subtract(45, 'minutes')
  timeStamps.push(bicarbonaatMoment2.format("HH:mm [- bicarbonaat]"))

  let bicarbonaatMoment1 = bicarbonaatMoment2.subtract(45, 'minutes')
  timeStamps.push(bicarbonaatMoment1.format("HH:mm [- bicarbonaat]"))
 
  timeStamps.reverse()
  timeStamps.sort()
  
  timeStamps.forEach(timeStamp => {
    console.log(timeStamp)
  })

} else {
  console.log('Please use: npm start <hour:minute> <callroom> <travelDuration> ')
}

