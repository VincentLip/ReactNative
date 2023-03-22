import { createSlice } from "@reduxjs/toolkit";


const favory = createSlice({
    name :'favory',
    initialState : {
        favory : []
    },
    reducers : {
        addFavory: (state,action)=> {
            state.favory.push(action.payload)
        },
    }
})

export const {addFavory} = favory.actions
export default favory.reducer;