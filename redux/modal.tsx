import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectData } from '@/components/home/types';

const initialState = {
  isShowModal: false,
  modalData: {} as ProjectData,
};

const modalSlice = createSlice({
  name: 'Modal Slice',
  initialState: initialState,
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    modalDataUpdate: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const modalActions = modalSlice.actions;
