import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'
import Sidebar from '../layouts/sidebar'

export default class Now extends React.Component {
    render() {
        return (
        <div className="container">
            <Sidebar/>
            <div className="blog-wrapper">
            <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>

            <h1>/now</h1>

            <p>hello! i am currently redoing this website. see you in a month from now. check out my progress <a href="https://github.com/stylate/portfolio/tree/dev">here</a>. </p>

            <p>also currently interning as a software engineer @ <a href="https://www.akamai.com/">akamai</a>. </p>
            <Icons />
            </CSSTransitionGroup>
            </div>
        </div>
        );
    }
}
