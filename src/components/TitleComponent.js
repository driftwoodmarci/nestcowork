import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrow } from '@fortawesome/free-solid-svg-icons';

class Title extends Component {
    render() {
        return (
            <div className='photo-section'>
                <div className='centered text-light'>
                    <h1 className='display-1'>
                        TACOMA'S #1 COWORKING &amp; MEETING SPACE
                    </h1>
                    <Button color='dark' size='lg'>
                        <FontAwesomeIcon icon={faCrow} /> Book A Tour
                    </Button>{' '}
                </div>
            </div>
        );
    }
}

export default Title;
