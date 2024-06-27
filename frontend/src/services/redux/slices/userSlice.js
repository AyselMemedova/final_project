import { createSlice } from "@reduxjs/toolkit";

if (!JSON.parse(localStorage.getItem('user'))) {
    localStorage.setItem('user',JSON.stringify({id:null}))
}

const authInitialState = JSON.parse(localStorage.getItem('user'));

const userSlice = createSlice({
  name: "user",
  initialState: authInitialState,
  reducers: {
    login: (state, action) => {
      // state.role = action.payload.role;
      // state.id = action.payload._id;
      //local storage
      localStorage.setItem(
        "user",
        JSON.stringify({  })
      );
    },
    logout: (state) => {
        state.id = null;
        // state.role = '';
        localStorage.setItem('user',JSON.stringify({}));
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;