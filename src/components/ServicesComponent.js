import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarWeek,
    faKey,
    faMailBulk,
    faMugHot,
    faPersonBooth,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';

class Services extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faMugHot} />{' '}
                <FontAwesomeIcon icon={faWifi} />{' '}
                <FontAwesomeIcon icon={faMailBulk} />{' '}
                <FontAwesomeIcon icon={faCalendarWeek} />{' '}
                <FontAwesomeIcon icon={faPersonBooth} />{' '}
                <FontAwesomeIcon icon={faKey} />{' '}
            </div>
        );
    }
}

export default Services;
