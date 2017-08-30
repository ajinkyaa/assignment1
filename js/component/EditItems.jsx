import React from "react"
import ReactDOM from "react-dom"

export default class EditItems extends React.Component{
  render() {
    return (
      <div>
        <input type="text" defaultValue={this.props.selectedItemName} />
      </div>
    )
  }
}