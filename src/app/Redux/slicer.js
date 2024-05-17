const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

export const counterSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addfunc: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addfunc, remove } = counterSlicer.actions;
export default counterSlicer.reducer;
