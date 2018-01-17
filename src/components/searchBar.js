import React from 'react';

class SearchBar extends React.Component{
 constructor(props){
   super(props);
  this.onHandleChange = this.onHandleChange.bind(this)
 }
 onHandleChange(e){
   const value = e.target.value;
   this.props.onSearch(value);
 }
 render(){
  return (
   <div className="search-bar">
    <input placeholder="  Search..." onChange={this.onHandleChange}/>
   </div>
  )
 }
}
export default SearchBar
