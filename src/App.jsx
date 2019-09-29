import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./CountMode/Counter";

class App extends Component {
    // I use redux as BLL, class and function components in React as UI
    // in this "Counter"

    state = {
        settingModeOn: true,
        stopCounter: false,
        step: 1,
        counter : {
            currentValue: 1,
            maxValue: 5,
            minValue: 0,
        },
    };

    settingModeOn = () => {
        this.setState({
            settingMode: !this.state.settingMode,
        })
    };

    incrementNumber = () => {
        let currentValue = +this.state.counter.currentValue + this.state.step;
        if (currentValue >= this.state.counter.maxValue) {
            // this.props.incrementNumber(currentValue);
            this.setState(
                {
                    stopCounter: true
                })
        } else {
            // this.props.incrementNumber(currentValue);
        }
    };

    defaultNumber = () => {
        // this.props.defaultNumber(this.state.counter.minValue);
        this.setState({
            stopCounter: false
        })
    };

    render() {
        return (
            <div className="App">
                <Header/>
                {this.state.settingMode
                    ? <div>
                        Settings
                    </div>
                    : <Counter counter={this.state.counter}
                               stopCounter={this.state.stopCounter}
                               incrementNumber={this.incrementNumber}
                               defaultNumber={this.defaultNumber}/>
                }
                <Footer onClick={this.settingModeOn}/>
            </div>
        );
    }
}

export default App;
