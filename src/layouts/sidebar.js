import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './sidebar.scss';
import './icons/scss/font-awesome.scss';
import resume from '../../docs/resume.pdf';
import Dropdown from './drop';


/* blueprint:
 *  - fix dropdown and add animation
 *  - add photo gallery
 * */

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDown: false
        }
    }

    drop(event) {
        event.preventDefault();
        this.setState({dropDown: !this.state.dropDown});
    }

    render() {
        return (
            <div className="sidebar">
                <h1/>
                <ul>
                    <li><Link to="/" activeClassName="active">home</Link></li>
                    <li><Link to="/film" activeClassName="active">blog</Link></li>
                    <li><Dropdown/></li>
                    <li>
                        <a href="https://github.com/stylate"><i className="fa fa-github fa-fw"></i></a>
                        <a href="https://instagram.com/alanhoodie"><i className="fa fa-instagram fa-fw"></i></a>
                        <a href="https://letterboxd.com/carbine"><i className="fa fa-film fa-fw"></i></a><br/><br/>
                        <a href="mailto:nguyenalan@berkeley.edu"><i className="fa fa-envelope fa-fw"></i></a>
                        <a href={resume}><i className="fa fa-file-o fa-fw"></i></a>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Sidebar;
