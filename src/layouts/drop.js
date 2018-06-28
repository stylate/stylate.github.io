import React from 'react';
import Link from 'gatsby-link';
import {CSSTransitionGroup} from 'react-transition-group';
import './icons/scss/font-awesome.scss';
import './sidebar.scss';
import './drop.scss';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        if (typeof window !== 'undefined') {
            this.state = {
                menuActive: false,
                width: window.innerWidth,
            };
        } else {
            this.state = {
                menuActive: false
            };
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.state = {
            menuActive: false,
            width: window.innerWidth,
        };
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    toggleMenu(event) {
        event.preventDefault();
        this.setState({menuActive: !this.state.menuActive});
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    render() {
        let menu;
        const { width } = this.state;
        const isMobile = width <= 900;
        if (!isMobile) {
            if (this.state.menuActive) {
                menu = <div className="drop">
                                    <CSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
                        <ul>
                            <li><Link to="/stebbins" activeClassName="active">stebbins</Link></li>
                            <li><Link to="/analog" activeClassName="active">analog</Link></li>
                            <li><Link to="/overseas" activeClassName="active">overseas</Link></li>
                            <li><Link to="/solitude" activeClassName="active">solitude</Link></li>
                        </ul>
                    </CSSTransitionGroup>
                        </div>
            } else {
                menu = ""
            }
        } else {
            menu = <div>
                <ul>
                    <li><Link to="/stebbins" activeClassName="active">stebbins</Link></li>
                    <li><Link to="/analog" activeClassName="active">analog</Link></li>
                    <li><Link to="/overseas" activeClassName="active">overseas</Link></li>
                    <li><Link to="/solitude" activeClassName="active">solitude</Link></li>
                </ul>
                </div>
        }
        return (
            <div id="menu-container">
                <a href="photo" onClick = {this.toggleMenu}> photo {menu} </a>
            </div>
        )
    }
}

export default Dropdown;
