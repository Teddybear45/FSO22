
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fullstack:1234@cluster0.acxvpyz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  // write a note
  const note = {
    content: 'HTML is Easy',
    date: new Date(),
    important: true,
  }
  collection.insertOne(note)
    .then(result => {
      console
        .log(result)
    })
    .catch(err => {
      console.log(err)
    })
    
  // read all notes

  client.close();
});

