import axios from "axios";


export const getAllTodo = async () => {
    try {
        let res = await axios.get( 'https://jsonplaceholder.typicode.com/todos?_sort=id&_order=desc');
        return res.data.filter((value)=>value.completed===false&&value.userId===10)
    } catch (e) {
        return []
    }
}
export const saveTodo = async (textInput) => {
    let todo = {
        "userId": 10,
        "title": "",
        "completed": false
    }
    todo.title = textInput;
    console.log(todo)
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', todo)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}