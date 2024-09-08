import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

class Header extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='topnav'>
                <a className='logo' href='/'>Movie Maker</a>
                <div className='search-container'>
                    <form>
                        <Link smooth to='#form'>Add Movies</Link>
                        <input type='text' placeholder='Search...' name='search'/>
                        <button type='submit'><i className='fa fa-search'></i></button>
                    </form>
                </div>
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;