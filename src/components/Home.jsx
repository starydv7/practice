import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const[data,setData]=useState([]);
  const[error,setError]=useState(null);
  const handleChange = (e) => {
    setText(e.target.value);
    setError(null);
  };
  const handleSubmit=(e)=>{
    if(text.trim()===''){
        setError("Input cant be empty");

    }else{
        setData([...data,text]);
        setText('');
        console.log(data);
    }
  }
  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return <div>
    <input type="text"
    value={text}
    onChange={handleChange}
    placeholder="Enter Data Here"
    />
    <button onClick={handleSubmit}>Add Data</button>
    {
        error && <p style={{color:"red"}}>{error}</p>
    }
    <div>
       {data.map((item,index) =>(
        <li key={index}>{item}
        <button onClick={() => handleDelete(index)} style={{color:"red", background:"black"}}> X </button>
        </li>
        
       ))}
      
    </div>
  </div>;
};

export default Home;
