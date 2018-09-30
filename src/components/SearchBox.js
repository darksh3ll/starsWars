import React, {Component} from 'react';
import {Input} from 'antd'

class SearchBox extends Component {
    // Récupérer nom des categories

    state = {
        value:''
    };
    handleChange = (e) => {
        this.setState({value : e.target.value})
    };

     fetchData  = async input => {

        const data = await fetch('https://swapi.co/api/?format=json');
        const json = await data.json();
        const categoriesJson = Object.keys(json);
        console.log(categoriesJson);

    };
    render() {
      this.fetchData();
        return (

           <Input className="saisie"
                    value={this.state.value}
                    onChange = {this.handleChange}
                    placeholder = "people">
           </Input>
        );
    }
}

export default SearchBox;