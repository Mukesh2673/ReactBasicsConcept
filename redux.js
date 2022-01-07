
const redux =require('redux')
const createStore=redux.createStore
const combineReducers=redux.combineReducers
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREM'
function buyCake()
{return {
    type:BUY_CAKE,
    info:'First redux action'
}
}
function buyIcecream()
{return {
    type:BUY_ICECREAM,
    info:'First redux action'
}

}
const initialCakeState={

    numOfCakes:10,
}
const initialIceCreamState={
    numOfIceCream:20
}

const cakereducer=(state=initialCakeState,action)=>{
    switch(action.type){
      
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
   
    default:return state
    }
}



const Icecreamereducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
      case BUY_ICECREAM:return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
    default:return state
    }
}







const rootReducer=combineReducers({
cake:cakereducer,
iceCream:Icecreamereducer

})



const store=createStore(rootReducer)
console.log('initial state',store.getState())
//allow app to subscribe changes in the store
const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))
//dispatch to updata the state
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
unsubscribe()
