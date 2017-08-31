import React from 'react'
import ReactDOM from 'react-dom'

export default class EditItems extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedName: '', // Hello World
      selectedID:  null
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedName: nextProps.selectedItem.text,
      selectedID: nextProps.selectedItem.id
    })  
  }

  handleChange(event) {
     this.setState({
      selectedName: event.target.value
    })
  }

  handleSubmit(event) {
    if(this.state.selectedID != null) {
      this.props.handleSubmit(this.state.selectedID, event.target.value)
    }
  }

  render() {
    return (
      <div>
        <input type='text' placeholder="Please select item from list on the left side" 
          value={this.state.selectedName} 
          onKeyUp={this.handleSubmit.bind(this)} 
          onChange={this.handleChange.bind(this)} 
        />
      </div>
    )
  }
}