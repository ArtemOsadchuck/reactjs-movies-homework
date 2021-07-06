import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainStore';
import movieDetailsPageSlice from './movieDetailsPageStore';
import actorPageSlice from './actorPageStore';

const rootReducer = combineReducers({
  mainReducer: mainSlice,
  movieDetailsReducer: movieDetailsPageSlice,
  actorPageReducer: actorPageSlice,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
