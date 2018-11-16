import React from 'react';
import {Grid, List} from 'semantic-ui-react';
import request from 'superagent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class FavouriteDetails extends React.Component {
  constructor(){
    super()
    this.state = {

    }

  }
  render() {
    return (
      this.props.data.favourites.map((item,key)=>{
        return(
            <div>
              <p>{item.name}</p>
            </div>
        )
      })

    );
  }
}

function mapStateToProps(state) {
  return {data: state.keywig}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FavouriteDetails);
