import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Modaldata = {
  title: string;
  content?: string;
} | null;

const initialState = {
  isShowModal: false,
  modalData: null as Modaldata,
};

const modalSlice = createSlice({
  name: 'Modal Slice',
  initialState: initialState,
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    modalDataUpdate: (state, action: PayloadAction<Modaldata>) => {
      state.modalData = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
