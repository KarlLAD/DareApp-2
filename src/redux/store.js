import { configureStore } from "@reduxjs/toolkit";
import player from "./player";
import loading from "./loading";

export const store = configureStore({
   
    reducer :{

        player : player ,
        // informe le store de loading
        loading : loading ,
        

    }

})