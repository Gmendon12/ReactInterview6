const {createStore} = require('redux')

const Buy_cake = "BUY_CAKE"

//action
function buycake(){
    return{
        type: Buy_cake
          }
};

//Reducer
const initial = {
    noofcake : 21,
}

function Shopkeeper(state=initial, action){
    switch(action.type){
        case Buy_cake : return{...state, noofcake: state.noofcake - 1}
        default: return state
    }
}

const store = createStore(Shopkeeper);

console.log("initial cakes"+ store.getState().noofcake);

store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())

console.log("after selling"+ store.getState().noofcake)