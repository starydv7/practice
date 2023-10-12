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