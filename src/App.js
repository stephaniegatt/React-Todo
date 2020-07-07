import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

const tasksData = [
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
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allTasks: tasksData,
      tasks: tasksData,
      newTaskName: "",
      searchText: "",
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeNewTaskName = e => {
    this.setState({
      ...this.state,
      newTaskName: e.target.value
    });
  }

  filterTodos = (tasks, searchText=this.state.searchText) => {
    return tasks.filter(task => task.task.includes(searchText));
  }

  changeSearchText = e => {
    this.setState({
      ...this.state,
      searchText: e.target.value,
      tasks: this.filterTodos(this.state.allTasks, e.target.value)
    });
  }

  clearFilter = () => {
    this.setState({
      ...this.state,
      tasks: this.state.allTasks,
      searchText: ""
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
    const tasks = [...this.state.allTasks, this.createTask()];
    this.setState({
      ...this.state,
      allTasks: tasks,
      newTaskName: "",
      tasks: this.filterTodos(tasks)
    });
  }

  toggleCompleted = id => {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    this.setState({
      ...this.state,
      tasks: tasks
    });
  }

  clearCompleted = () => {
    const filtered = this.state.allTasks.filter(task => task.completed === false);
    this.setState({
      ...this.state,
      allTasks: filtered,
      tasks: this.filterTodos(filtered)
    });
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <Search 
          searchText={this.state.searchText}
          changeSearchText={this.changeSearchText}
          clearFilter={this.clearFilter}
        />
        <TodoForm 
          name={this.state.newTaskName} 
          onChange={this.changeNewTaskName} 
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
