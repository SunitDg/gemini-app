import { useContext } from "react";
import { TodoItemsCtx } from "../store/todo-items-store";

function Welcome() {
    const todoItemctx = useContext(TodoItemsCtx);

    return <>
    {!todoItemctx.item.length && <h1>No Items</h1>}</>
}

export default Welcome;