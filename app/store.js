const configureStore = require('@reduxjs/toolkit').configureStore
const { coreModule } = require('@reduxjs/toolkit')
const cakeReducer = require('./features/cake/cakeSlice')
const icecreamReducer = require('./features/icecream/icecreamSlice')

store = configureStore({
    reducer: {
        cake:cakeReducer,
        icecream:icecreamReducer
        
    }
})


module.exports = store