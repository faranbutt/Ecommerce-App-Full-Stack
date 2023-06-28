import { configureStore, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

// Define your CounterState interface
interface CounterState {
  totalQuantity: number;
}

const initialState:CounterState = {
  totalQuantity:0
}

// Create a Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    AddtoCart: (state, action: PayloadAction<number>) => {
      state.totalQuantity = state.totalQuantity + action.payload;
    },
    DeletefromCart: (state, action: PayloadAction<number>) => {
      state.totalQuantity = Math.max(0, state.totalQuantity - action.payload);
    },
    ClearCart: (state) => {
      state = initialState;
    },
  },
});

// Extract the reducer and actions from the Slice
export const { reducer, actions } = counterSlice;
export const CounterActions = actions;
// Define a separate Reducer using the extracted reducer
export const counterReducer: Reducer<CounterState, PayloadAction<any>> = reducer;


