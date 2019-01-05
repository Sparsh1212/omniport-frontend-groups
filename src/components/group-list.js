import React from 'react'
import { connect } from 'react-redux'

import { Tiles } from 'formula_one'
import { setGroupList } from '../actions'

class GroupList extends React.PureComponent {
  componentDidMount () {
    this.props.SetGroupList()
  }
  render () {
    const { groupList } = this.props
    return (
      <React.Fragment>
        <Tiles
          tile={
            groupList.isLoaded
              ? groupList.data.map(group => {
                return {
                  name: group.name,
                  desc: <span>{group.shortDescription}</span>,
                  link: `${this.props.match.path}${group.slug}`,
                  iconName: 'users',
                  imageUrl: group.logo
                }
              })
              : []
          }
        />
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    groupList: state.groupList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SetGroupList: () => {
      dispatch(setGroupList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupList)
