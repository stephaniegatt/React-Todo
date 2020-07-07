import React, { Component } from "react";

class TodoList extends Component {
    render() {
        return (
            <div>
                { this.props.tasks.map(task => (
                    <p key={task.id} 
                        style={task.completed ? { textDecoration: 'line-through' } : null} 
                        onClick={() => this.props.toggleCompleted(task.id)}
                    >
                            {task.task}
                    </p>
                )) }
            </div>
        )
    }
}

export default TodoList;