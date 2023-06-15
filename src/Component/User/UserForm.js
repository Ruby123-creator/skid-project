import React from 'react'
import { useState } from 'react'

import './UserForm.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_USER } from '../../Redux/ActionTypes';
const UserForm = () => {
  let formvalues = {
    username: "",
    phoneNo: "",
    email: "",
   id:'',
  };
  //usestate for formvalues
  let [values, setvalues] = useState(formvalues);
  //usestate for validation
  const [Errors, setErrors] = useState({});
  //usestate for submitting the form
  const [isSubmit, setIsSubmit] = useState(false);
 const Navigate = useNavigate()
 const userlist = useSelector(state=>state.users)
//  console.log(userlist)
 const dispatch = useDispatch()
  //function for input changing
  // useEffect(()=>{
  //   
  // },[isSubmit,Navigate,values,dispatch])
  
  let handlechange = (e) => {
    let { name, value } = e.target;
    //it stores all the form values
    setvalues({ ...values, [name]: value ,id:Date.now() });
  };
  //whenever signup btn is clicked
  const submitform = (e) => {
    e.preventDefault()
    //check all the form values which is stores in values
    //call the validate function
    setErrors(validate(values));
    //make issumbit true
    setIsSubmit(true);
    if(isSubmit){
          dispatch({
            type:CREATE_USER,
            payload:values,
          })
          Navigate('/home')
        }
  };
  // validation function for all inputs
  const validate = (x) => {
    // console.log(x);
    let errors = {};
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
   const isuserPresent = userlist.filter((user)=>user.email===x.email)
  //  console.log(isuserPresent)
   if (!x.username || x.username.split(" ").length < 2) {
      console.log(x.username ,x.username.split(" ").length)
      errors.username = "Username is invalid!";
    }
    if (!x.email || !regex1.test(x.email)||isuserPresent.length!==0) {
      errors.email = "Email is invalid or already exist!";
    }
    if (!x.phoneNo || x.phoneNo.length!==10) {
      errors.phoneNo = "invalid Phone Number";
    }
    

    console.log(errors);
    return errors;
  };
  return (
    <div>
    <h1 >User Form</h1>
    <div className='container'>

<form action="" onSubmit={submitform}>
        <input type="text" placeholder='Enter Username' onChange={handlechange} name="username" id="" />
        <p>{Errors.username}</p>
        <input type="number" placeholder='Enter Phone No.' onChange={handlechange} name="phoneNo" id="" />
        <p>{Errors.phoneNo}</p>

        <input type="email" placeholder='Enter Email' name='email' onChange={handlechange} />
        <p>{Errors.email}</p>

        <button type="submit">
          Create User
        </button>
        {Object.keys(Errors).length === 0 && isSubmit ? (
            <div style={{ color: "green", padding: "10px" }}>
              Signed in successfully
            </div>
            
          ) : (
            <div style={{ color: "red", padding: "10px" }}>
              **All field are mandatory in correct format!!
            </div>
          )}
      </form>
    </div>
    </div>
  )
}

export default UserForm