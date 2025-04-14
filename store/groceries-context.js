import { createContext } from "react";
const groceryContext = createContext({
    ids:[],
    addStaple:(staple)=>{}
})