import React from 'react'
import { FlatList, Image, Text, TouchableOpacity } from 'react-native'

//list data in a FlatList
const MovieList = props =>{
    //enclose items in a Touchable and display some text
/*OMDb API Poster key c6e9dfca*/
const renderItem = ({item}) =>(
    <TouchableOpacity style={{flex:1, paddingBottom:10,}} onPress={props.goToDetails()}>
    {/*OMDb API Poster key c6e9dfca*/}
    <Image source={{uri:`http://img.omdbapi.com/?apikey=c6e9dfca&i=${item.imdbID}`}} style={{height:200, width:200}} />
    
        <Text>Title: {item.Title}</Text>
        <Text>Year: {item.Year}</Text>
      </TouchableOpacity>)

    return (<FlatList style={{flex:1}} renderItem={renderItem} data={props.results}  />)}



export default MovieList;
