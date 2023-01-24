import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Slices/messageSlice";
import notesSlice from "./Slices/notesSlice";

export default configureStore({
    reducer: {
        messageReducer,
        notesReducer: notesSlice
        // productReducer,
        // cartReducer
    }
});
