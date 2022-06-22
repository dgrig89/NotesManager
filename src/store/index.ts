import { configureStore } from "@reduxjs/toolkit";

import directoriesSlice from "./directories-slice.ts";

const store = configureStore({
  reducer: { directoriesSlice: directoriesSlice.reducer },
});

export default store;
