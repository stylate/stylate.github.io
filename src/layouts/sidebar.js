import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'


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
        let side;
        if (typeof window !== 'undefined' && window.location.pathname != "/decal") {
            side = <div className="sidebar">
                    <ul>
                        <li><Link to="/" activeClassName="active">home</Link></li>
                        <li><Link to="/" activeClassName="active">about</Link></li>
                        <div id="misc"><li><Dropdown/></li></div>
                    </ul> 
                </div>
        } else {
            side = <div className="sidebar">
                <ul>
                    <li><Link to="/" activeClassName="active">home</Link></li>
                </ul>
                </div>
        }
        return (
            side
        )
    }
}

export default Sidebar;
