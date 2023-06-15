import React from 'react'
import Card from '../Card/Card'
import './Home.css'
import { Button } from 'react-bootstrap'
import uniqid from 'uniqid'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
  const users = useSelector(state=>state.users)
  const Navigate = useNavigate()
  return (
    <div className='home'>
    <div>    <Button variant='primary' onClick={()=>Navigate('/')}>Add User</Button>
</div>
<div className="user-list">
    
      {users?.map((user) => {
        return (
          <Card
            key={uniqid()}
            name={user?.username}
            phoneNo={user?.phoneNo}
            emailId={user?.email}
            id ={user?.id}
          />
        );
      })}
    </div> 
    </div> )
}

export default Home