import React,{useState,useEffect} from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function Form(props) {
  const {register,handleSubmit,errors} = useForm();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [gender,setGenader] = useState();
  const [desc,setDesc] = useState();
  const [skill,setSkill] = useState();

  useEffect(() => {
    
    setName(props.name);
    setEmail(props.Email);
    setPhone(props.phone);
    setGenader(props.gender);
    setSkill(props.skills);
    setDesc(props.desc);
    return () => {
      console.log(name);
    }
  },[props.id] );

  const onSubmitHandler =(data)=>{  
    setName(""); setPhone(""); setGenader(""); setEmail(""); setDesc(""); setSkill("");
    if(props.id)
    {
      axios.put(`https://userdata-4e250.firebaseio.com/data/${props.id}.json`,data).then(res=>{
        return alert("edited successfully");
      }).catch(e=>console.log(e.message));
   }
    else{
      axios.post(`https://userdata-4e250.firebaseio.com/data.json`,data).then(res=>{
        return alert("Saved successfully");
      }).catch(e=>console.log(e.message));
    } 
  }  
  return (
    <div className="App">
     
     <form name="UserData" className="Form" onSubmit={handleSubmit(onSubmitHandler)}>
      <h3>USER DATA</h3>
       <input type="text" placeholder="Name" name="Name" ref={register({required:true})} value={name} onChange={e=>setName(e.target.value)}/>
       {errors.Name && <p>please enter your name</p>}

       <input type="email" placeholder="E-mail" name="Email" ref={register({required:true})} value={email} onChange={e=>setEmail(e.target.value)}/>
       {errors.Email && <p>please enter valid email id</p>}

       <input type="number" placeholder="phone no." name="phone" ref={register({required:true, maxLength:10 ,minLength:10})} value={phone} onChange={e=>setPhone(e.target.value)}/>
       {errors.phone && <p>please enter correct mobile number</p>}

     <div className="Radiobtn">
       <label>Gender:</label>
        <input type="radio" value="Male" name="gender" ref={register({required:true})} checked={gender==="Male"} onChange={e=>setGenader(e.target.value)}/> Male
        <input type="radio" value="Female" name="gender" ref={register({required:true})} checked={gender==="Female"} onChange={e=>setGenader(e.target.value)}/> Female
        <input type="radio" value="Other" name="gender" ref={register({required:true})} checked={gender==="Other"} onChange={e=>setGenader(e.target.value)}/> Other
     </div>
     {errors.gender && <p>choose your gender</p>}
     <div className="Skills">
       <label>Skills:</label>
     <select name="skills" ref={register({required:true})} value={skill} onChange={e=>setSkill(e.target.value)}>
         <option value="UI">UI</option>
         <option value="Ux">UX</option>
         <option value="Backend">Backend</option>
         <option value="CSS">CSS</option>
       </select>
     </div>
       <textarea name="Description" placeholder="Description" className="Text" ref={register} value={desc} onChange={e=>setDesc(e.target.value)}/>
       <div className="btn">
       <button type="submit">Save</button>
       </div>
     </form>
    </div>
  );
}

export default Form;
