import { createSlice } from "@reduxjs/toolkit";

import { DirectoryType } from "../types/type";

const directoriesSlice = createSlice({
  name: "directoriesSlice",
  initialState: { directories: [] as DirectoryType[] },
  reducers: {
    addDirectory(state, action) {
      state.directories.push(action.payload);
    },
  },
});

export const directoriesActions = directoriesSlice.actions;

export default directoriesSlice;
