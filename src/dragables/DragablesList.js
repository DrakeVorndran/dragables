import React, { Component } from 'react'

import DragablesItem from './DragablesItem'
import './list.css'

class DragablesList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }],
      x: 0,
      y: 0,
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.pageX, y: e.pageY });
  }



  render() {
    const { list, x, y } = this.state
    return (
      <div className='drag-list' onMouseMove={this._onMouseMove.bind(this)}>
        {list.map(item => <DragablesItem x={x} y={y} value={item} key={String(item.id) + ' : ' + String(item.value)} />)}
        
        
      </div>

    )
  }

}

export default DragablesList