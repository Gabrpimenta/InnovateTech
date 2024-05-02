import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'src/types/Student';

const initialState: Student[] = [];

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => {
      return action.payload;
    },
  },
});

export const { setStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
