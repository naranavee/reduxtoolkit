const createSlice =  require('@reduxjs/toolkit').createSlice

const initialState = {
    numCakes:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered :(state)=>{ state.numCakes--},
        restocked:(state,action)=>{ state.numCakes += action.payload}
    }
})

//export default cakeSlice.reducer