import React, { Component } from "react";
import Todos from "./todos";
import Addtodos from "./AddTodos";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk " },
      { id: 2, content: "play mario kart" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <Addtodos addtodo={this.addtodo} />
      </div>
    );
  }
}

export default App;
