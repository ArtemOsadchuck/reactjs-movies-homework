import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  lang: string;
}
const initialState: IInitialState = {
  lang: 'EN',
};

const langSlice = createSlice({
  name: 'langSlice',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
