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

    toggleMenu() {
        this.setState({menuActive: !this.state.menuActive});
    }

    render() {
        let menu;
        if (this.state.menuActive) {
            menu = <div>
                    <ul>
                        <li><Link to="/stebbins" activeClassName="active">stebbins</Link></li>
                        <li><Link to="/people" activeClassName="active">people</Link></li>
                        <li><Link to="/misc" activeClassName="active">misc</Link></li>
                    </ul>
                    </div>
        } else {
            menu = "";
        }
        return (
            <div id="menu-container">
                <i className = "fa fa-plus" onClick = {this.toggleMenu}> {this.props.title} </i>
            </div>
        )
    }
}

export default Dropdown;
