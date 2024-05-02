import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import reduxStorage from './reduxStorage';
import studentsReducer from './studentsSlice';

const rootReducer = combineReducers({
  students: studentsReducer,
});

const persistedReducer = persistReducer(
  { key: 'root', storage: reduxStorage },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
