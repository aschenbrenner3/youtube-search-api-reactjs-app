//needed whenever transpiling jsx to html via React
import React, {Component} from 'react';

//define new class named SearchBar and give all functionality that React.Component class has
class SearchBar extends Component {
  constructor(props){
    //calling parent method with super
    super(props);
    // create new object and assign to this.state, in this case we want to record the property term(short for search-term) on state
    //state = plain javascript object exists on any class based component, each instance of class based component has it's own copy of state
    this.state = {term: ''};
  }

  //define method on class/a function: called render method - every class must have a render function and return some jsx
  render() {
    return (
      <div className="search-bar">
        <input
        //turn input into a controlled component / controlled form element - value only changes when state changes
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  //event handler to listen to user's behavior - this is just a method on the class
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  //shortened and added to render method
}

//create reference for index.js to conenct to this searchbar.js ie export this file
export default SearchBar;

// promote to class component when we want some sort of record keeping - to upgrade from functional component <input />
//functional component example:
// const SearchBar = () => {
//   //generate html input user can type input into
//   return <input />; //React.createElement
// };
// to class component using es6 class
// class SearchBar extends Component {
//   //define method on class/a function: called render method - every class must have a render function
//   render() {
//     return <input />;
//   }
// }


//each class based component has own state and when state is changed the render function is re-run and all children of that class are re-run as well
//to initialize state object - set property state to plain javascript object inside of classes constructor method
