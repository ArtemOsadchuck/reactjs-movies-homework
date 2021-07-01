import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainStore';

const rootReducer = combineReducers({
  mainReducer: mainSlice,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
