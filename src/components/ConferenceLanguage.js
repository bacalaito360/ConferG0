import React, { Component } from 'react'
import SelectLanguage from './SelectLanguage'
import Select from 'react-select';
import { Button } from '@material-ui/core';
import shortid from 'shortid'

const options = [
    { value: 'english', label: 'english' },
    { value: 'spanish', label: 'spanish' },
    { value: 'korean', label: 'korean' }]
export default class ConferenceLanguage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
    }
    submit = (event) => {
        event.preventDefault();
        console.log(this.state)
        //call backend with id to save and language
        return this.props.history.push('/conference/' + shortid.generate());
    };

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="center">
                <div className="block">
                    <img className="image-input" src={require('../assets/logo.png')} />
                    <form onSubmit={(e) => this.submit(e)} noValidate autoComplete="off" className="block">
                        <Select
                            className="selection"
                            value={selectedOption}
                            onChange={this.handleSelectChange}
                            value={this.state.selectedOption}
                            options={options}
                            placeholder="Select Languange"
                        />
                        <Button type="submit">submit</Button>
                    </form>
                </div>

            </div>
        )
    }
}
