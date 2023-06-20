import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
    link1 : [
    { id: 1, name: "my name", link: "/home" },
    { id: 2, name: "my about", link: "/about" },
    { id: 3, name: "my contact", link: "/contact" },
  ],
  
  
  link2 : [
    { id: 1, name: "my name", link: "/home" },
    { id: 2, name: "my about", link: "/about" },
    { id: 3, name: "my contact", link: "/contact" },
  ],
  
  
  link3 : [
    { id: 1, name: "my name", link: "/home" },
    { id: 2, name: "my about", link: "/about" },
    { id: 3, name: "my contact", link: "/contact" },
  ],
  
  link4 : [
    { id: 1, name: "my name", link: "/home" },
    { id: 2, name: "my about", link: "/about" },
    { id: 3, name: "my contact", link: "/contact" },
  ],
  link5 : [
    { id: 1, name: "my name", link: "/home" },
    { id: 2, name: "my about", link: "/about" },
    { id: 3, name: "my contact", link: "/contact" },
  ],

  users:[]

}

export const userSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {

    addEmail: function (state,action){

      console.log(action);
      state.users.push(...action.payload)

    }
  },
})

export const {addEmail} = userSlice.actions

export default userSlice.reducer