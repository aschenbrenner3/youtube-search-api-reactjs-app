//index.js contains all of our components
//Define React - get access to React from 'react' library/package and reactDom from react-dom in node modules folder
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import js pages from relative path
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

//declare variable to hold YouTube api key
const API_KEY = '<insert YouTube api key here';

//Create new component to product html (React component)
//'const' is es2016 syntax - does same thing as var: declaring a variable except const is a constant/never going to change or be reassigned
class App extends Component { //= ()=> ORfunction(){   ()=> identical to function()
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };//want user to see some data right away so object is not empty
    this.videoSearch('React.js');
  }

  videoSearch(term){
    //this is a mock search
    //function data is the callback function
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    //returning some jsx - jsx is a dialect of javascript that looks like html but is really javascript (webpack and babel will transpile this to the browser)
    //jsx cannot be understood by the browser - webpack and babel transpile to html so browser can interpret and user can see intended experience
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  //es6 repl: babeljs.io/repl
  }
}

//Tell React to put the component's generated html into the DOM/show it on the page
//create instance of app component by wrapping with jsx tag:<App />
ReactDOM.render(<App />, document.querySelector('.container'));
//second argument = where to render the component(1st argument) on the page?

//downward data flow - only most parent component should be responsible for fetching data
//since all other components are child of index.js this component should be responsible for fetching data
