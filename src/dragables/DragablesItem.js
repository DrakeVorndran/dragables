import React, { Component } from 'react'
import ReactDom from 'react-dom'

import './item.css'
class DragablesItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      myX: 0,
      myY: 0,
      width: 0,
      height: 0,
      held: false,
      offsetX: 0,
      offsetY: 0,
    }
  }


  componentDidMount() {
    const { value } = this.props
    const node = ReactDom.findDOMNode(this.refs[String(value.id) + ' : ' + String(value.value)])
    console.log(node)
    this.setState({ myX: node.offsetLeft, myY: node.offsetTop, width: node.offsetWidth ,height: node.offsetHeight })
  }

  click() {
    const { myX, myY, width, height } = this.state
    const { x, y } = this.props
    const offsetX = x - myX
    const offsetY = y - myY
    
    this.setState({ held: true, offsetX, offsetY })
    if(offsetX < 0 || offsetY < 0 || offsetY > height || offsetX > width){
      this.setState({held: false})
    }


  }

  end() {
    this.setState({
      held: false,
      offsetX: 0,
      offsetY: 0,
    })
  }


  render() {
    const { value } = this.props
    const { offsetX, offsetY, held } = this.state
    const { x, y } = this.props    
    const style = { top: y - offsetY, left: x - offsetX }
    const emptyStyle = {}
    return (
      <div style={held ? style : emptyStyle} className={'drag-item ' + (held ? 'held' : '')} ref={String(value.id) + ' : ' + String(value.value)} onMouseDown={e => this.click()} onMouseUp={e => this.end()}>
        {/* {value.value} */}
        {value.value}
      </div>
    )
  }

}

export default DragablesItem