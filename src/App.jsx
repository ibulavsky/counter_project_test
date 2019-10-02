import React from 'react';
import './App.css';
import Header from "./Header";
import Settings from "./SettingMode/Settings";
import Footer from "./Footer";
import Counter from "./CountMode/Counter";
import {applySettingsAC, defaultNumberAC, incrementNumberAC} from "./Redux/Reducer";
import {connect} from "react-redux";

class App extends React.Component {

    incrementNumber = () => {
        let currentValue = +this.props.counter.currentValue + this.state.step;
        if (currentValue >= this.props.counter.maxValue) {
            this.props.incrementNumber(currentValue);
            this.setState(
                {
                    stopCounter: true
                })
        } else {
            this.props.incrementNumber(currentValue);
        }
    };

    defaultNumber = () => {
        this.props.defaultNumber(this.props.counter.minValue);
        this.setState({
            stopCounter: false
        })
    };

    settingModeOn = () => {
        this.setState({
            settingMode: !this.state.settingMode
        })
    };

    applySetting = (minValue, maxValue,) => {
        this.props.applySettings(minValue, maxValue);
        this.setState(
            {
                stopCounter: false
            }
        )
    };

    state = {
        stopCounter: false,
        settingMode: false,
        step: 1,
    };
    restoreState = () => {

    };

    saveState = () => {

    };

    render = () => {
        return (
            <div className="App">
                <Header/>
                {this.state.settingMode
                    ? <Settings maxValue={this.props.counter.maxValue}
                                minValue={this.props.counter.minValue}
                                applySetting={this.applySetting}
                    />
                    : <Counter counter={this.props.counter}
                               state={this.state}
                               incrementNumber={this.incrementNumber}
                               defaultNumber={this.defaultNumber}/>
                }
                <Footer onClick={this.settingModeOn}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        incrementNumber(currentValue) {
            dispatch(incrementNumberAC(currentValue))
        },
        defaultNumber(minValue) {
            dispatch(defaultNumberAC(minValue))
        },
        applySettings(minValue, maxValue) {
            dispatch(applySettingsAC(minValue, maxValue))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

