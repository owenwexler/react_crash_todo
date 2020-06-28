import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/addtodo';
import About from './components/pages/about';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Learn React.js',
        completed: false
      },
      {
        id: 3,
        title: 'Mow the lawn',
        completed: false
      },
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) 
   });
  }

  // delete ToDo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // add Todo
  addTodo = (title) => {
    const newID = this.state.todos.length + 1;
    const newTodo = {
      id: newID,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
     <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/> 
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />
          
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
