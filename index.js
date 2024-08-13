//npm install @reduxjs/toolkit

const store = require('./app/store')
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions


console.log(store.getState())
const unSubscribe = store.subscribe(()=>{
    console.log('updated state ',store.getState())
})

store.dispatch(cakeActions.ordered)
store.dispatch(cakeActions.ordered)
store.dispatch(cakeActions.ordered)
store.dispatch(cakeActions.restocked(3))