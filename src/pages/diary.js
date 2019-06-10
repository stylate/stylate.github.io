import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'
import Sidebar from '../layouts/sidebar'

export default class Diary extends React.Component {

    componentDidMount() {
        window.location.replace('https://medium.com/@hipster/rambling-b88f127421c7');

    }

    render() {
        return null;
    }
}
