
import { useContext, useRef, useState } from "react"
import { IoIosAdd } from "react-icons/io";
import { TodoItemsCtx } from "../store/todo-items-store";

function AddTodo(props) {
  const [todoName,setTodo] = useState("");
  const todoNameRef = useRef('');
  const todoItemFromContext = useContext(TodoItemsCtx);

  function addTodo() {
    todoNameRef.current.focus();
    console.log(todoItemFromContext)
    todoItemFromContext.addNewItem(todoNameRef.current.value);
    setTodo('');
  }
    return <> 
    <form className="row">
      <div className="col-6">
        <input type="text" 
        ref={todoNameRef}/>
      </div>
      <div className="col-4">
      <input type="date"/>
      </div>
      <div className="col-2">
        <button type="button" className='btn btn-success' onClick={() => addTodo(todoName)}>
        <IoIosAdd />
        </button>
      </div>
    </form>
<br/>
    
    </>
}

export default AddTodo