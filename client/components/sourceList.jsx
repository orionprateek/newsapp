import React from 'react';
import {Grid, List, Segment, Image, Icon, Header} from 'semantic-ui-react';
import request from 'superagent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectedSourceDetails from '../../redux/actions/selectedSourceDetails.js';
import FavouriteSource  from '../../redux/actions/favouriteSource.js';



class SourceList extends React.Component {
  constructor(){
    super()
    this.state = {

    }

  }
  sourceDetails(item){
    this.props.handleSelectedSourceDetails(item);
  }
  addClick(item){
    this.props.handleFavouriteSource(item);
  }
  render() {
    return (
        <div>
          {this.props.data.selectedSourceData.map((item,key)=>{
            let color = 'black';
            this.props.data.favourites.map((item1,key1)=>{
              if(item1.url == item.url){
                color='teal';
              }
            })
            return(
              <Segment raised overflow='hidden' color='orange'>
                <Grid columns='equal' divided>
                  <Grid.Row>
                    <Grid.Column width={5} style={{

                      }}
                    >
                      {
                        item.urlToImage && item.urlToImage.length > 0 ?
                          <Image src={item.urlToImage} fluid style={{height:'71px'}}/>
                            :
                          ""
                      }
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <p style={{textAlign: 'justify'}}>
                        <span onClick={this.sourceDetails.bind(this,item)} style={{fontWeight: 'bold', cursor: 'pointer'}}>
                          {item.title}
                        </span>
                      </p>
                      <p>
                        <span>{new Date(item.publishedAt).toLocaleDateString()} {new Date(item.publishedAt).toLocaleTimeString()}</span>
                        <Icon color={color} name='favorite' onClick={this.addClick.bind(this,item)} style={{float: 'right', cursor: 'pointer'}}/>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            )
          })}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {data: state.keywig}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSelectedSourceDetails:SelectedSourceDetails,
    handleFavouriteSource: FavouriteSource
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SourceList);
