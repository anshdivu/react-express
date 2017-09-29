import React, { Component } from 'react';
import NewItem from './NewItem';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <ItemList items={this.props.items} />
        <NewItem onCreate={this.props.onCreate} />
      </div>
    );
  }
}

function ItemList(props) {
  return (
    <div className='panel-block'>
      <ul>{props.items.map(renderItem)}</ul>
    </div>
  );
}

function renderItem(item) {
  return <li key={item.id}>{item.value}</li>;
}
