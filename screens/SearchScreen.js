import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput} from 'react-native';

import MovieList from '../MovieList'

export default class SearchScreen extends React.Component {
  state={
    searchResults:null,
    searchTitle:'',
    msg:'No results.',
  }

  //set header
  static navigationOptions={
      headerTitle:'Home',
      headerStyle:{
          backgroundColor:'grey',
      },
      headerTintColor: (Platform.OS === "ios" ? 'pink': 'red'),
  }

  render(){
    return (
    <View style={styles.container}>
    <TextInput 
    style={styles.input}
    value={this.state.searchTitle} 
    placeholder='Search..'
    onChangeText={this.getResults}
    />
    {/*if there is a result display it*/ } 
     { (this.state.searchResults && <MovieList results ={this.state.searchResults} goToDetails={()=>this.goToDetails} /> ) 
     || <Text style={{fontSize:20}}>{this.state.msg}</Text>}
      <Button title="fetch" onPress={()=> this._fetchMovies()} />
      <Button title="Go to detail" onPress={()=>this.props.navigation.navigate('Detail')} />
    
    </View>
    
  );
  }//end render()

  goToDetails=()=>{
    this.props.navigation.navigate('Detail')
    
  }

  getResults=(searchTitle)=>{
    this.setState({searchTitle})
  }

  //fetch movie list from database
  _fetchMovies= async ()=>{
    //start fetching if the search title is 3 letters or higher
    if(this.state.searchTitle.length > 2){
      //fetch page 1 (first 10 results) from OMDB by title
      //OMDb API key 2be4d0ef (http://www.omdbapi.com/?apikey=2be4d0ef&)
      const response1 = await fetch(`http://www.omdbapi.com/?apikey=2be4d0ef&page=1&s=${this.state.searchTitle}`)
      let page1;
      //if the connection is ok and there is a result
      if(response1.ok){
        //retrieve results 'Search key' from this Promise object 
        const results1 = await (response1.json())
        if(results1.Response==="False"){
          //if there is no result, clear the page, display feedback and abort
          this.setState({searchResults:null, msg: `There are no results for: ${this.state.searchTitle}`})
          console.log('Response ======'.results1.Response)

          return
        }
        page1 = results1.Search
        console.log("page1",page1)
        console.log('response is ok')
      }else{
        return;
      }
      
      //fetch page2 
      const response2 = await fetch(`http://www.omdbapi.com/?apikey=2be4d0ef&page=2&s=${this.state.searchTitle}`)
      let page2;
      //if there are more than 10 results, then get results from page2
      if(response2.ok){
        const results2 = await (response2.json())
        page2 = results2.Search
        }else{
          page2 = []
        }
        console.log("page2",page2)
      this.setState({searchResults: [...page1, ...page2] })
    }
  }//end _fetchMovies()


}//end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  font:{
    fontSize:30,
  },
  input:{
    padding:10,
    margin:10,
    height:40,
    width:'95%',
    borderWidth:2,
    borderColor:'grey',
  },
});

