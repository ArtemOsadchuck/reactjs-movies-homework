import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageSlice from './langStore';

const rootReducer = combineReducers({
  languageReducer: languageSlice,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
