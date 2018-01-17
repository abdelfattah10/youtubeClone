import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

import './styles/style.css';

const API_KEY = 'AIzaSyCYB6__Nd4LCgKEfxIshfEWByk_Wnc-Ws0'


class App extends Component {
 constructor(){
   super()

   this.state = {
     videos:[],
     selectedVideo: null
   }
   this.videoSearch('music')

 }
 videoSearch(term){
  YTsearch({key:API_KEY,term},(videos)=>{
    this.setState({
      videos,
      selectedVideo: videos[0]
    });
  })
  }
  render(){
    const videoSearch = _.debounce(this.videoSearch.bind(this),300)
    return (
    <div>
      <h1><span className="you">You</span><span className="tube">tube</span></h1>
          <SearchBar onSearch={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos} onSelected={ selectedVideo => this.setState({selectedVideo}) }/>
    </div>
   )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
