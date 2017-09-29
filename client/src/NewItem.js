import React, { Component } from 'react';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const ifCreateSuccessful = this.props.onCreate(this.state);
    this.resetInput(ifCreateSuccessful);
  }

  resetInput(canReset) {
    Promise.resolve(canReset).then(
      reset => reset && this.setState({ value: '' })
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='panel-block'>
        <ItemInput value={this.state.value} onChange={this.onInput} />
      </form>
    );
  }
}

function ItemInput(props) {
  return (
    <input type="text" value={props.value} onChange={props.onChange} className='input is-full-width' placeholder='Add a todo!'/>
  );
}
