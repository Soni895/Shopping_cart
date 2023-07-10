import { createSlice } from "@reduxjs/toolkit";

export const Cartslice=createSlice({
name:"cart",
initialState:[],
reducers:{

    add:(state,actions)=>
    {
        state.push(actions.payload);

    },
    remove:(state,action)=>
    {

return state.filter((item)=>item.id!==action.payload)
    }
}

});

export const {add,remove}=Cartslice.actions;
export default Cartslice.reducer;