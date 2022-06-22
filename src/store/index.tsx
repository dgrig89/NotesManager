import { configureStore } from "@reduxjs/toolkit";

import directoriesSlice from "./directory-slice";

const store = configureStore({
  reducer: { directories: directoriesSlice.reducer },
});

export default store;
