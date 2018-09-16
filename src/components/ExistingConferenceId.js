import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import SelectLanguage from './SelectLanguage'
import { Button } from '@material-ui/core';
import Select from 'react-select';

const options = [
    { value: 'english', label: 'english' },
    { value: 'spanish', label: 'spanish' },
    { value: 'korean', label: 'korean' }]

export default class ExistingConferenceId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            confid: 'x',
        }
    }
    submit = (event) => {
        event.preventDefault();
        console.log(this.state)
        //check backend for existing id and send language
        return this.props.history.push('/conference/' + this.state.confid);
    };

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    handleChange = confid => event => {
        console.log(event.target.value)
        this.setState({
            [confid]: event.target.value,
        });
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="center">
                <div className="block">
                    <img className="image-input" src={require('../assets/logo.png')} />
                </div>
                <form onSubmit={(e) => this.submit(e)} noValidate autoComplete="off" className="block">
                    <TextField
                        id="confid"
                        label="conference Id"
                        className="selection"
                        value={this.state.confid}
                        onChange={this.handleChange('confid')}
                        margin="normal"
                    />
                    <Select
                        className="selection"
                        value={selectedOption}
                        onChange={this.handleSelectChange}
                        value={this.state.language}
                        options={options}
                        placeholder="Select Languange"
                    />
                    <Button type="submit">submit</Button>
                </form>

            </div>
        )
    }
}
