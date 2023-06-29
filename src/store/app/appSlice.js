import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'App',
    initialState: {
        isSaving: true,
        movements: [],
        movement: null,
        // movement: {
        //   id: 'gdhgetgd',
        //   type: 'expense', //expense | cost
        //   date: 1122222,
        //   title: 'University',
        //   category: '',
        // }
    },
    reducers: {
      addNewMovement: (state, action) => {

      },
      setMovements: (state, action) => {

      },
      setSaving: (state) => {

      },
      updateMovement: (state, action) => {

      },
      deleteMovementById: (state, action) => {

      }
    }
});


// Action creators are generated for each case reducer function
export const { 
  addNewMovement,
  setMovements,
  setSaving,
  updateMovement,
  deleteMovementById } = appSlice.actions;