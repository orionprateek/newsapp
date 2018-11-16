module.exports = (state = {
  sourceList:[],
  selectedSourceName: '',
  selectedSourceData:[],
  selectedSourceDetails:{title:''},
  favourites:[]
},action)=>{
  switch (action.type) {
    case "allSources":
    return{
      sourceList:action.data,
      selectedSourceName:state.selectedSourceName,
      selectedSourceData:state.selectedSourceData,
      selectedSourceDetails:{title:''},
      favourites:state.favourites
    }
    case "selectedSource":
      return{
        sourceList:state.sourceList,
        selectedSourceName:state.selectedSourceName,
        selectedSourceData:action.data,
        selectedSourceDetails:{title:''},
        favourites:state.favourites
      }
      break;
    case "selectedSourceName":
      return{
        sourceList:state.sourceList,
        selectedSourceName:action.data,
        selectedSourceData:state.selectedSourceData,
        selectedSourceDetails:state.selectedSourceDetails,
        favourites:state.favourites
      }
      break;
    case "selectedSourceDetails":
      return{
        sourceList:state.sourceList,
        selectedSourceName:state.selectedSourceName,
        selectedSourceData:state.selectedSourceData,
        selectedSourceDetails:action.data,
        favourites:state.favourites
      }
    case "favouriteSource":
      var favourites = state.favourites;
      var tmp = 0;
      favourites.map((item,key)=>{
        if(item == action.data){
          tmp = 1;
        }
      })
      if(tmp == 0){
        favourites.push(action.data)
      }
      else{
        var index = favourites.findIndex((x) => x.url === action.data.url)
        if (index > -1) {
          favourites.splice(index, 1);
        }
      }
      return{
          sourceList:state.sourceList,
          selectedSourceName:state.selectedSourceName,
          selectedSourceData:state.selectedSourceData,
          selectedSourceDetails:state.selectedSourceDetails,
          favourites:favourites
      }
  }
  return state;
};
