import React, { Component } from 'react';
import TodoService from './TodoService';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      items: []
    };

    this.createItem = this.createItem.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    TodoService.getItems().then(data =>
      this.setState({ title: data.title, items: data.items })
    );
  }

  render() {
    return (
      <div className='panel'>
        <Header title={this.state.title} />
        <Todo items={this.state.items} onCreate={this.createItem} />
      </div>
    );
  }

  createItem(item) {
    return TodoService.createItem(item).then(this.updateState);
  }

  updateState(savedItem) {
    this.setState(prevState => ({
      items: prevState.items.concat(savedItem)
    }));

    return savedItem;
  }
}

function Header(props) {
  return <h1 className='panel-heading'>{props.title}</h1>;
}

export default App;
