const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ugdgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err){
        console.log(err.message)
        return
      }
      console.log("Connected to mongodb");
      
      client.db('MyDatabase').collection('people').insertOne({
        name: 'Hector Leannon',
        city: 'West New York',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/185.jpg  ',
        pass: '$2a$10$PcA.ziyHyf8178Q/RfYvDuFgtVPsgB10nWca97zpfg1vhuRAsuft6',
      }).then(result => {
        console.log(result);
      })
client.db('sample_training').collection('inspections').findOne().then(result => {
console.log(result);
});
});