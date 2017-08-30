import React from "react"
import ListView from './component/ListView.jsx'
import EditItems from './component/EditItems.jsx'

export default class PanelContainer extends React.Component{
  
  getEditBox() {
    let element
    this.props.items.map(item => {
      if(item.selected) {
          element = ( <EditItems selectedItemName={item.text} /> )
      }
      else {
        element = (
          <EditItems selectedItemName="hello" />
        )
      }
    })
    return element
  }

  handleClick(id) {
    this.props.actions(id)
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.items.map(item =>
              <ListView item={item} handleClick={this.handleClick.bind(this)} key={item.id}/>
            )}
          </ul>
        </div> 
        {this.getEditBox()}
      </div>
    )
  }
}