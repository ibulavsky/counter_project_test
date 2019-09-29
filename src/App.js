import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
    // I don't use redux, mobx in this "Counter ls"
    // It's local state

    state = {
        settingModeOn: true
    };

    settingModeOn = () => {
        this.setState({
            settingMode: !this.state.settingMode,
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
                    : <div>
                        Counter
                    </div>}
                <Footer onClick={this.settingModeOn}/>
            </div>
        );
    }
}

export default App;
