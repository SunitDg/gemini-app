import { useContext } from 'react';
import { TodoItemsCtx } from '../store/todo-items-store';
import styles from './TodoItem.module.css';
import { AiFillApple } from "react-icons/ai";

function TodoItem(props) {
    let foodItems = [];
    const todoItemFromContext = useContext(TodoItemsCtx);

    return (
        <>
            <form className="row">
                {todoItemFromContext.item.length ?
                    <>
                        {todoItemFromContext.item.map((item, index) => {
                            return <>
                                <div className="col-6">
                                    <span 
                                    className={`${styles['todo-item']} text-success`}>
                                        {item}
                                    </span>
                                </div>
                                <div className="col-4">
                                    21/12/1992
                                </div>
                                <div className="col-2">
                                    <button className='btn btn-danger'
                                        onClick={() => todoItemFromContext.deleteItem(item)}>
                                            <AiFillApple />
                                        </button>
                                </div>
                                <br /><br/>
                            </>
                        })}
                    </>
                    : <div className="col-6">No Item</div>
                }
            </form>
        </>
    );
}

export default TodoItem