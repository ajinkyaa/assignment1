import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PanelContainer from './PanelContainer.jsx'
import {setSelected} from './actions'

const AppContainer = ({items, actions}) => (
  <div>
    <PanelContainer items={items} actions={actions} />
  </div>
)

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(setSelected, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
