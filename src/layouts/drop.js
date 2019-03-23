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
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleWindowSizeChange);
        }
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleWindowSizeChange);
        }
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
                            <li><Link to="/self" activeClassName="active">self</Link></li>
                            <li><Link to="/green" activeClassName="active">green</Link></li>
                        </ul>
                    </CSSTransitionGroup>
                        </div>
            } else {
                menu = ""
            }
        } else {
            menu = <div className="drop">
                <ul>
                    <li><Link to="/self" activeClassName="active">self</Link></li>
                    <li><Link to="/green" activeClassName="active">green</Link></li>
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
