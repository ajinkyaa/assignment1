import React from 'react'
import ReactDOM from 'react-dom'

export default class Navigation extends React.Component{
  render() {
    return (
      <div className='navigation'>
        <div className='navLeft'><span>Assignment Left Menu</span></div>
        <div className='navRight'><span>Assignment Right Menu</span></div>
      </div>
    )
  }
}