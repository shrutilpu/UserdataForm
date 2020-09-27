import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function App() {
  const {register,handleSubmit,errors} = useForm();

  const onSubmitHandler =(data)=>{
     axios.post("https://userdata-4e250.firebaseio.com/data.json",data).then(res=>{
       onclose();
       return alert("Saved successfully");
     }).catch(e=>console.log(e.message));
  }
  return (
    <div className="App">
     
     <form name="UserData" className="Form" onSubmit={handleSubmit(onSubmitHandler)}>
      <h3>USER DATA</h3>
       <input type="text" placeholder="Name" name="Name" ref={register({required:true})}/>
       {errors.Name && <p>please enter your name</p>}

       <input type="email" placeholder="E-mail" name="Email" ref={register({required:true})}/>
       {errors.Email && <p>please enter valid email id</p>}

       <input type="number" placeholder="phone no." name="phone" ref={register({required:true, maxLength:10 ,minLength:10})}/>
       {errors.phone && <p>please enter correct mobile number</p>}

     <div className="Radiobtn">
       <label>Gender:</label>
        <input type="radio" value="Male" name="gender" ref={register({required:true})}/> Male
        <input type="radio" value="Female" name="gender" ref={register({required:true})}/> Female
        <input type="radio" value="Other" name="gender" ref={register({required:true})}/> Other
     </div>
     {errors.gender && <p>choose your gender</p>}
     <div className="Skills">
       <label>Skills:</label>
     <select name="skills" ref={register({required:true})}>
         <option value="UI">UI</option>
         <option value="Ux">UX</option>
         <option value="Backend">Backend</option>
         <option value="CSS">CSS</option>
       </select>
     </div>
       <textarea name="Description" placeholder="Description" className="Text" ref={register}/>
       <div className="btn">
         <button type="reset">Edit</button>
       <button type="submit">save</button>
       </div>
       
     </form>
    </div>
  );
}

export default App;
