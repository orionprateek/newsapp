import React from 'react';
import {Grid, List} from 'semantic-ui-react';
import request from 'superagent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectedSource from '../../redux/actions/selectedSource.js';
import SelectedSourceName from '../../redux/actions/selectedSourceName.js';
import AllSources  from '../../redux/actions/allSources.js';

class Sources extends React.Component {
  constructor(){
    super()
    this.state = {
      sourceList : []
    }
  }
  componentDidMount(){
    const req = request.get('https://newsapi.org/v2/sources');
    req.query({apiKey: 'fafab898b42c4726836d8b376343058c'});
    req.then(res => {
      let response = JSON.parse(res.text);
      this.props.handleAllSources(response.sources);
    })
  }
  selectedSourceClick(id, name){
    const req = request.get('https://newsapi.org/v2/top-headlines');
    req.query({sources:id,apiKey: 'fafab898b42c4726836d8b376343058c'});
    req.then(res =>{
      let response = JSON.parse(res.text);
      if(response.status == "ok"){
        this.props.handleSelectedSourceName(name);
        this.props.handleSelectedSource(response.articles)
      }
    })

  }
  render() {
    const style = {
      list:{
        float:'left',
        cursor: 'pointer',
        margin:'5px'
      }
    }
    return (
        <div>
          <List divided relaxed>
            {this.props.data.sourceList.map((item, key) => {
                return (
                  <List.Item key={key}>
                    <List.Content floated verticalAlign='middle' style={style.list} onClick={this.selectedSourceClick.bind(this, item.id, item.name)}>
                      {item.name}
                    </List.Content>
                  </List.Item>
                )
            })}
          </List>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {data: state.keywig}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleAllSources:AllSources,
    handleSelectedSourceName:SelectedSourceName,
    handleSelectedSource:selectedSource,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Sources);
