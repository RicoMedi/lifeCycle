import React from "react";




class SearchForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }



    render(){
        return(
            <div >
            <input placeholder= 'breed' value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value})} />
            <button onClick={()=> this.props.searchDogs(this.state.inputValue)}> Submit</button>
            </div>
           
        )
    }
}
export default SearchForm;