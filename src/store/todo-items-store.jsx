import { createContext } from "react";

export const TodoItemsCtx =  createContext({
    item: [],
    addNewItems: () => {},
    deleteItem: () => {}  
});