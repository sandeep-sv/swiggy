import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem : (state,action)=>{
                state.items.push(action.payload);
        },

        deleteItem: (state)=>{
                state.items.pop();
        }

    }

});

export const {addItem , deleteItem}  = cartSlice.actions;
export default cartSlice.reducer;