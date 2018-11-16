import React from 'react';
import {Grid, List, Card, Image, Icon} from 'semantic-ui-react';
import request from 'superagent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class SourceListDetails extends React.Component {
  constructor(){
    super()
    this.state = {

    }

  }
  render() {
    return (
        this.props.data.selectedSourceDetails.title.length!=0?
          <Card fluid>
            {
              this.props.data.selectedSourceDetails.urlToImage && this.props.data.selectedSourceDetails.urlToImage.length > 0 ?
                <Image src={this.props.data.selectedSourceDetails.urlToImage} />
                  :
                ""
            }
           <Card.Content>
             <Card.Meta>
               <span className='date'>{new Date(this.props.data.selectedSourceDetails.publishedAt).toLocaleDateString()} {new Date(this.props.data.selectedSourceDetails.publishedAt).toLocaleTimeString()}</span>
             </Card.Meta>
             <Card.Description style={{textAlign: 'justify'}}>{this.props.data.selectedSourceDetails.description}</Card.Description>
           </Card.Content>
           <Card.Content extra>
             <a href={this.props.data.selectedSourceDetails.url} style={{color: 'black'}} target='_blank'>
               <Icon name='linkify' />
               Click here to visit the story
             </a>
           </Card.Content>
          </Card>

          :
          ""
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

export default connect(mapStateToProps, matchDispatchToProps)(SourceListDetails);
