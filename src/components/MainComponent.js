import React, { Component } from 'react';
import Header from './Header';
import Title from './TitleComponent';
import Services from './ServicesComponent';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Header />
                </div>
                <div>
                    <Title />
                </div>
                <div>
                    <Services />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;
