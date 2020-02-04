import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'       },
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({ todos })
  }
  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 1000)
    const todos = [...this.state.todos, todo]
    this.setState({todos})
  }

  render() {
    return (
      <div className="Todo-app container">
        <h1 className="center blue-text">To do list</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>

        <AddTodo addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;
