import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let change = prompt('Lets Change the Location')
    // console.log(e.target.value)
    this.props.store.editItem(e.target.value , change)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" onClick={this.checkItem} value={item.name} />
        {item.name}
        {' - ' + item.location + " "}
        <button className="editButton" value={item.name} onClick={this.editItem}>Edit</button>
        <button className='deleteButton' value={item.name} onClick ={this.deleteItem}>Delete</button>
      </div>
    )
  }
}

export default Item