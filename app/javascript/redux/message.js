import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRandomMessage = createAsyncThunk(
  "messages/random",
  async () => {
    const res = await fetch("/random_message.json");
    const data = await res.json();
    return data.message;
  }
);

const initialState = {
  greeting: ""
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomMessage.fulfilled, (state, action) => {
      state.content = action.payload;
    });
  }
});

export default messageSlice.reducer;
