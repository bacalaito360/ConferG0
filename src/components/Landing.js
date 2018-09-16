import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import id from 'uuid/v4'
import shortid from 'shortid'


export default class Landing extends Component {



    redirect = () => {
        return this.props.history.push('/ConferenceLanguage');
    }

    inputId = () => {
        return this.props.history.push('/inputconfid');
    }

    render() {
        return (
            <div className="center" id={this.uuid}>
                <div className="intro-cont">
                    <div className="block">
                        <img className="image" src={require('../assets/logo.png')} />
                    </div>
                    <div className="block">
                        <div className="block selection">
                            <Button color="primary" onClick={this.redirect}>Start New Conference</Button>
                        </div>
                        <div className="or">
                            -or-
                         </div>
                        <div className="join">
                            <Button color="primary" onClick={this.inputId}>Join Existing Conference</Button>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        )
    }
}
