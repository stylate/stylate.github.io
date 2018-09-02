import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'

export default class Decal extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.error.forEach(({ message }) => {
                console.error(`Rendering error: ${message}`);
            });
            return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>

            </CSSTransitionGroup>
            </div>
        );
    }
}
