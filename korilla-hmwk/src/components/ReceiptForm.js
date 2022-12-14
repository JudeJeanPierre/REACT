import React from "react";

export default class ReceiptForm extends React.Component {
    state = {
        text: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="receipt..."
                />
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        );
    }
}