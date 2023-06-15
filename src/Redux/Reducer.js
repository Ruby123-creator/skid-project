import { CREATE_USER, DELETE_USER, EDIT_USER } from "./ActionTypes";
import { userlist } from "./Store";

export const adduser=(state=userlist,action)=>{
  console.log(action.payload)
    switch(action.type){

        case CREATE_USER:
            let obj = action.payload
            return {
                ...state,
                users:[...state.users , {...obj}]
            }
        case DELETE_USER:
            return{
                ...state,
                users:state.users.filter((user)=>user.id!==action.payload)
            }
        case EDIT_USER:
            const updatedList = state.users.map((user)=>
            {
                if(user.id===action.payload.id){
                    return{
                        ...user,
                        ...action.payload.values

                    }
                }

                return user;
            })

            return{
                ...state,
                users:updatedList
            }    
        default:
            return state
    }
}