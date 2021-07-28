import rootStore from './rootStore/rootStore';

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export default rootStore;
