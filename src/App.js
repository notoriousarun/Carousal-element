import React, { Component } from 'react';
import './App.css';
import Carousal from './Carousal/Carousal.js';
import Card from './Card/Card.js';
import data from './data/data.js';
import leftArrow from './Image/left-arrow.png';
import rightArrow from './Image/right-arrow.png';

class App extends Component {
    state = {
        records: data.records,
        record: data.records[0]
    }

    prevClick = () => {
        const newIndex = this.state.record.id-1;

        if (! (this.state.record.id === 0) ){
             this.setState({
                record: data.records[newIndex]
             });
        }
    };
    nextClick = () => {
        const newIndex = this.state.record.id+1;

        if (! (this.state.record.id === data.records.length-1) ) {
            this.setState({
                record: data.records[newIndex]
            });
        } 
    };

    render() {
        return (
            <div className="App">
              <Carousal styleObject={{"height": "400px",
                                      "width": "30%",
                                     }}
                        prevClick={this.prevClick}
                        nextClick={this.nextClick}
                        leftArrow={leftArrow}
                        rightArrow={rightArrow}
              >
                <Card record={this.state.record} />
              </Carousal>
            </div>  
        );
    };
};

export default App;
