const configureStore = require('@reduxjs/toolkit').configureStore
const { coreModule } = require('@reduxjs/toolkit')
const cakeReducer = require('./features/cake/cakeSlice')
const icecreamReducer = require('./features/icecream/icecreamSlice')
const reduxlogger = require("redux-logger");

const logger = reduxlogger.createLogger();
store = configureStore({
    reducer: {
        cake:cakeReducer,
        icecream:icecreamReducer,
        
    },
    middleware:
    (getdefaultMiddleware)=>getdefaultMiddleware().concat(logger),
});


module.exports = store