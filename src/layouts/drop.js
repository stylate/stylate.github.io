import React from 'react';
import Link from 'gatsby-link';
import {CSSTransitionGroup} from 'react-transition-group';
import './icons/scss/font-awesome.scss';
import './sidebar.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menuActive: false
        };
    }

    toggleMenu(event) {
        event.preventDefault();
        this.setState({menuActive: !this.state.menuActive});
    }

    render() {
        let menu;
        if (this.state.menuActive) {
            menu = <div>
                    <br/>
                    <ul>
                        <li><Link to="/stebbins" activeClassName="active">stebbins</Link></li>
                        <li><Link to="/people" activeClassName="active">people</Link></li>
                        <li><Link to="/overseas" activeClassName="active">overseas</Link></li>
                        <li><Link to="/misc" activeClassName="active">misc</Link></li>
                    </ul>
                    </div>
        } else {
            menu = "";
        }
        return (
            <div id="menu-container">
                <a href="photo" onClick = {this.toggleMenu}> photo {menu} </a>
            </div>
        )
    }
}

export default Dropdown;
