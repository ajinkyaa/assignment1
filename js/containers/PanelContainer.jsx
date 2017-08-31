import React from 'react'
import ListView from './../components/ListView.jsx'
import EditItems from './../components/EditItems.jsx'

export default class PanelContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      selectedItem: {
        text: '',
        id: ''
      }
    }
  }

  handleClick(id, text) {
    this.props.actions.setSelected(id, text)
  }

  handleSubmit(id, text) {
    this.props.actions.editItems(id, text)
  }

  getSelected() {
    let selected
    this.props.items.map(item =>
      (item.selected) ? selected = item : ''
    )
    return selected
  }

  render() {
    return (
      <div>
        <div className='leftPanel'>
          <ul>
            {this.props.items.map(item =>
              <ListView item={item} handleClick={this.handleClick.bind(this)} key={item.id}/>
            )}
          </ul>
        </div> 
        <div className='middlePanel'>
          <h3>
            Object Content
          </h3>
          <EditItems 
            selectedItem={this.getSelected()} 
            handleSubmit={this.handleSubmit.bind(this)}
          />
        </div>
        <div className='rightPanel'>
          <h3>Object Details</h3>
        </div>
      </div>
    )
  }
}