
const redux =require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios =require('axios')

/* redux thaunk define async action creators
 npm install axios redux-thunk

*/

const initialState={
    loading:false,
    users:[],
    error:''
    }

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILUER='FETCH_USERS_FAILURE'
 
const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess=users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILUER,
        payload:error
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
                return{
                    loading:false,
                    users:action.payload,
                    error:''
                     }
       case FETCH_USERS_FAILUER:
                return{
                    loading:false,
                    users:[],
                    error:action.payload
                     }
             
    }
}
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(respose=>{
                const users=respose.data.map(user=>user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error=>{
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())