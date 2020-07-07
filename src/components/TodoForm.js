import React from "react";

class TodoForm extends React.Component {

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.name} 
                    onChange={this.props.onChange} 
                    placeholder="Enter your todo"
                />
                <button onClick={this.props.addTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }

}

export default TodoForm;