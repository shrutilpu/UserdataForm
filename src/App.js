import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './Form';
import List from './List'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {parse} from 'query-string'
function App() {
  const query= parse(useHistory().location.search);
  const [role,setRole]=useState();
  const [data,setData]=useState({});
  const EditDataHandler =(id)=>{
    axios.get(`https://userdata-4e250.firebaseio.com/data/${id}.json`).then(res=>{
      setData({id:id, phone:res.data.phone,skills:res.data.skills,
        Name:res.data.Name,gender:res.data.gender,email:res.data.Email,desc:res.data.Description})
        return console.log(data);
    }).catch(e=>alert(e.message));
}
  useEffect(() => {
    axios.get(`https://userdata-4e250.firebaseio.com/data/${query.id}.json`).then(res=>{ 
      return setRole(res.data?res.data.role:null);
    })
  })
  
  return (
    <div className="App">
     <Form id={data.id} name={data.Name} Email={data.email} desc={data.desc} skills={data.skills} gender={data.gender} phone={data.phone}/> 
     {
      role?<List editHnadler={EditDataHandler}/>:null
     } 
    </div>
  );
}

export default App;
