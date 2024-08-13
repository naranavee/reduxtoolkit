const createSlice =  require('@reduxjs/toolkit').createSlice

const initialState = {
    numiceCream:20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered :(state)=>{ state.numiceCream--},
        restocked:(state,action)=>{ state.numiceCream += action.payload}
    }
})


module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions