import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name:"data",
    initialState:{
        fullData: null,
    },
    reducers:{
        addFullData: (state,action)=>{
            state.fullData = action.payload;
        }
    }

});

export const {addFullData} = dataSlice.actions;
export default dataSlice.reducer;