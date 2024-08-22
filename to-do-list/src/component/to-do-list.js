import { useEffect, useState} from "react";
import * as todoService from "../../../to-do-list/src/service/TodoService";
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoList () {
    const [todoList,setTodoList] = useState([])
    const [textInput,setTextInput] = useState('')


    useEffect (() => {
        //     Call API search  name
        getAllTodo()
    },[])

    const addBtnTodoList = async () => {
        // setTodoList([textInput, ...todoList]);
        // setTextInput('')
        let isSuccess = await todoService.saveTodo(textInput)
        setTextInput("")
        if(isSuccess) {
            alert("Thêm mới thành công")
        } else {
            alert("Thêm mới thất bại.")
        }
    }

    const addTodo = (event) => {
        setTextInput(event.target.value)
    }

    const getAllTodo = async () => {
        try {
            let res= await todoService.getAllTodo()
            setTodoList(res);
        } catch (e) {
            console.log(e)
        }
    }
        return (
            <div style={{textAlign:'center', padding:30}}>
                <h1>To do list</h1>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => addTodo(e,textInput)}
                    className='w-25 '
                    placeholder="Add Todo"/>
                <span className=' p-3'>
                <button className='btn btn-primary' disabled={!textInput} onClick={addBtnTodoList}>Add</button>
                    </span>
                {
                    todoList.map((item) =>
                        <div key={item.id}>
                            {item.title}
                        </div>
                    )
                }

            </div>
        )
}

export default ToDoList;