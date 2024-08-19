import {Component} from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            textInput:""
        }
    }

    addBtnTodoList = () => {
        this.setState({
            todoList : [this.state.textInput, ...this.state.todoList],
            textInput: ""
        })
    }

    addTodo = (event) => {
        this.setState({textInput : event.target.value})
    }

    render() {
        const {todoList, textInput} = this.state;
        return (
            <div style={{textAlign:'center', padding:30}}>
                <h1>To do list</h1>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => this.addTodo(e,textInput)}
                    placeholder="Add Todo"/>
                <button onClick={this.addBtnTodoList}>Add</button>
                {
                    this.state.todoList.map((item) =>
                        <div>
                            {item}
                        </div>
                    )
                }

            </div>
        )
    }
}

export default ToDoList;