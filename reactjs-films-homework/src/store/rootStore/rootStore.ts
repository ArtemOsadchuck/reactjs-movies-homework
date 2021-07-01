import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainStore';
import movieDetailsPageSlice from './movieDetailsPageStore';

const rootReducer = combineReducers({
  mainReducer: mainSlice,
  movieDetailsReducer: movieDetailsPageSlice,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
