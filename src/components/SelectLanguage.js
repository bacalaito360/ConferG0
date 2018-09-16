import React, { Component } from 'react'
import Select from 'react-select';
const options = [
    { value: 'english', label: 'english' },
    { value: 'spanish', label: 'spanish' },
    { value: 'korean', label: 'korean' }]


export default class SelectLanguage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
    }
    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <Select
                className="selection"
                value={selectedOption}
                onChange={this.handleSelectChange}
                value={this.state.selectedOption}
                options={options}
                placeholder="Select Languange"
            />
        )
    }
}
