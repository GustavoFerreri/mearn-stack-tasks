import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }
    addTask(e) {
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
        e.preventDefault();
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return ( 
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Logo</a>
                    </div>
                </nav>
                {/* CONTENT */}
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} className="materialize-textarea" placeholder="Task Description"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;