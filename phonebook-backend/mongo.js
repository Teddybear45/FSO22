const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://ted:${password}@cluster0.cze5vin.mongodb.net/?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const inputName = process.argv[3]
const inputNumber = process.argv[4]

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const person = new Person({
      name: inputName,
      number: inputNumber,
    })

    return person.save()
  })
  .then(() => {
    console.log('person saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))