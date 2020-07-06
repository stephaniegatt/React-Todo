import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Take Garbage Out",
          id: 1528817077287,
          completed: false,
        },
        {
          task: "Get Car Washed",
          id: 1528817077288,
          completed: false,
        },
      ],
      newTaskName: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  onChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      newTaskName: e.target.value
    });
  }

  createTask = () => {
    return {
      task: this.state.newTaskName,
      id: Date.now(),
      completed: false
    }
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, this.createTask()],
      newTaskName: ""
    })
  }

  toggleCompleted = (id) => {
    const tasks = [...this.state.tasks];
    const i = tasks.findIndex(task => task.id === id);
    tasks[i].completed = !tasks[i].completed;
    this.setState({
      ...this.state,
      tasks: tasks
    })
  }

  clearCompleted = () => {
    const filtered = this.state.tasks.filter(task => task.completed === false);
    this.setState({
      ...this.state,
      tasks: filtered
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm 
          name={this.state.newTaskName} 
          onChange={this.onChange} 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          tasks={this.state.tasks} 
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
