import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_USER } from '../../Redux/ActionTypes';

function UserEditForm({id}) {
  const [show, setShow] = useState(false);
  const [username,setUsername] = useState("")
  const [phoneNo,setPhoneNo] = useState(0)
  const [email,setEmail] = useState("")
  const userlist = useSelector(state=>state.users)
  const values ={
    username:username,
    phoneNo:phoneNo,
    email:email,
  }

 const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChanges=(id)=>{
  let valid= validate(values)
    if(valid){
     dispatch({
      type:EDIT_USER,
      payload:{
        id:id,
        values:values,
      }
     })
    }
    else{
      alert("invalid inputs or emailid already exist")
    }
  }

  const validate=(x)=>{
    console.log(x)
    const isuserPresent = userlist.filter((user)=>user.email===x.email)
    if(x.username===''||x.email===''||x.phoneNo===''||x.phoneNo.length!==10||isuserPresent.length>1){
      return false;
    }
    else{
      return true;
    }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            
        <input type="text" placeholder='Edit Username' onChange={(e)=>setUsername(e.target.value)} name="" id="" />
        <br />
        <input type="number" placeholder='Edit Phone No.' onChange={(e)=>setPhoneNo(e.target.value)} name="" id="" />
        <br />
        <input type="email" placeholder='Edit Email' onChange={(e)=>setEmail(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleChanges(id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserEditForm;