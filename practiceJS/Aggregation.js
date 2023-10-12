const data=[
    {name:"Pawan",Titile:"Yadav"},
    {name:"Bhumi",Titile:"Yadav"},
    {name:"Manisha",Titile:"Yadav"},
    {name:"Jasveen",Titile:"Yadav"},
    {name:"Neha",Titile:"Yadav"},

]
const aggregatedData = data.reduce((result, current) => {
    if (!result[current.name]) {
      result[current.name] = { name: current.name, totalScore: 0, count: 0 };
    }
    result[current.name].totalScore += current.score;
    result[current.name].count++;
    return result;
  }, {});
  
  console.log(Object.values(aggregatedData));

  const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err;
  
  const db = client.db('mydb');
  const collection = db.collection('mycollection');

  collection.aggregate([
    {
      $group: {
        _id: '$name',
        totalScore: { $sum: '$score' },
        count: { $sum: 1 }
      }
    }
  ]).toArray((err, results) => {
    if (err) throw err;
    console.log(results);
    client.close();
  });
});
