import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    NavbarBrand,
    Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrow } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light sticky='top' expand='lg'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'>
                            <span className='brand'>
                                {' '}
                                <FontAwesomeIcon icon={faCrow} /> NEST Cowork
                            </span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='ms-auto' navbar>
                                <NavItem className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        to='/services'
                                    >
                                        <i className='fa fa-home fa-lg' />{' '}
                                        Services
                                    </NavLink>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <NavLink className='nav-link' to='/pricing'>
                                        <i className='fa fa-list fa-lg' />{' '}
                                        Pricing
                                    </NavLink>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        to='/location'
                                    >
                                        <i className='fa fa-info fa-lg' />{' '}
                                        Location
                                    </NavLink>
                                </NavItem>
                                <NavItem className='nav-item'>
                                    <NavLink className='nav-link' to='/about'>
                                        <i className='fa fa-address-card fa-lg' />{' '}
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button color='dark' size='lg'>
                                        <FontAwesomeIcon icon={faCrow} /> Book A
                                        Tour
                                    </Button>{' '}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
