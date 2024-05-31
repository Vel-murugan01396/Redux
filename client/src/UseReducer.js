const INITAL_STATE={
    userList:[]
}

 const UseReducer=(state=INITAL_STATE,action)=>{
    switch (action.type) {

      case "getUser":
        return{
          ...state,
          userList:action.payload
        }
        case "addUser":
        return{
            ...state,
            userList:[...state.userList,action.payload]
        }

        //this is new code
        case 'updateUser':
      return {
        ...state,
        userList: state.userList.map((user, index) =>
          index === action.index ? action.payload : user
        ),
      };
    case 'deleteUser':
      return {
        ...state,
        userList: state.userList.filter((_, index) => index !== action.index),
      };

     
    
        default:
           return state;
    }

}

export default UseReducer;