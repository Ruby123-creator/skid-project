import React from "react";
import Button from 'react-bootstrap/Button';


import "./Card.css";
import UserEditForm from "../EditForm/UserEditForm";
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../../Redux/ActionTypes";

const Card = ({name ,phoneNo ,emailId ,id}) => {
  let dispatch = useDispatch()
  const handleClick =(id)=>{
    dispatch({
      type:DELETE_USER,
      payload:id,
    })
  }
  return (
    <div className="card-box">
      <div className="card-body">
        
        <div className="card-item-name">{name}</div>
        <div className="card-item-details">{phoneNo}</div>
        <div className="card-item-details">{emailId}</div>


        <UserEditForm id={id}/>

        <Button variant="primary" onClick={()=>handleClick(id)}>
        Delete
      </Button>
      </div>
    </div>
  );
};

export default Card;