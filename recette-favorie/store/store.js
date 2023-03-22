

import { configureStore } from "@reduxjs/toolkit";
import favory from "./favory";

export const store = configureStore({
    reducer : {
        favory : favory
    }
})