import React, {Component} from 'react';
import {Grid,Header,Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Sources from './components/sources.jsx';
import SourceList from './components/sourceList.jsx';
import SourceListDetails from './components/sourceListDetails.jsx';
import FavouriteDetails from './components/favouriteDetails.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectedSource from '../redux/actions/selectedSource.js';


class NewsApp extends Component {

  constructor(props){
    super(props);
    this.state={

    }
  }


  render() {
    const style = {
      body:{
      fontFamily: 'Comfortaa, cursive',
      backgroundColor: 'cornsilk'
      },
      header: {
        height: '10vh',
        paddingTop: '1%',
        margin: 0,
        fontFamily: 'Griffy, cursive',
        color:'red',
        fontSize:'45px',
      },
        header2: {
          marginTop: '-1%',
          fontFamily: 'Comfortaa, cursive',
          color:'teal',
        }
    }
    let color = 'black';
    this.props.data.favourites.map((item,key)=>{
      if(item.url == this.props.data.selectedSourceDetails.url){
        color='teal';
      }
    })

    return (
      <div style={style.body}>
        <Header as='h1' content='Newsroom.' style={style.header} textAlign='center'/>
          <Header as='h4' content='The Premium Newstime.' style={style.header2} textAlign='center'/>
        <Grid columns='equal' divided padded style={{height: '85vh', overflow: 'hidden'}}>
           <Grid.Row style={{backgroundColor:'#e67459'}}>
             <Grid.Column style={{color:'white', fontSize:'20px'}}>
               Sources
             </Grid.Column>
             <Grid.Column width={6} style={{color:'white', fontSize:'20px'}}>
               {this.props.data.selectedSourceName.length!=0?
                 this.props.data.selectedSourceName
                 :
                'Source Name'
               }
             </Grid.Column>
             <Grid.Column width={6} style={{color:'white', fontSize:'20px'}}>
               Story
               {this.props.data.selectedSourceDetails.title.length!=0 && color=='teal'?
                 <Icon circular size='small' style={{float: 'right', margin:'-6px'}} color='white' name='favorite'/>
                 :
                 ""
               }
             </Grid.Column>
           </Grid.Row>

           <Grid.Row>
             <Grid.Column style={{
                 padding:'0'}}>
               <Grid.Row>
                 <Grid.Column style={{height: '69vh', overflowY: 'scroll', overflowX: 'hidden', paddingLeft:'11px'}}>
                   <Sources/>
                 </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                 <Grid.Column style={{height: '11vh', overflow: 'hidden', backgroundColor:'teal'}}>
                   <Header as='h4' style={{margin:'11px', color:'white', fontSize:'18px', fontFamily:'Comfortaa, cursive'}}>Favorites {'('}{this.props.data.favourites.length!=0?(this.props.data.favourites.length):'0'}{')'}</Header>
                 </Grid.Column>
               </Grid.Row>
             </Grid.Column>
             <Grid.Column width={6} style={{height: '75vh', overflowY: 'scroll', overflowX: 'hidden' }}>
               <SourceList/>
             </Grid.Column>
             <Grid.Column width={6} style={{height: '75vh', overflowY: 'scroll', overflowX: 'hidden' }}>
               <SourceListDetails/>
             </Grid.Column>
           </Grid.Row>
         </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {data: state.keywig}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSelectedSource:selectedSource
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsApp);
