import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'
import '../layouts/decal.scss'

export default class Decal extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.error.forEach(({ message }) => {
                console.error(`Rendering error: ${message}`);
            });
            return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <div className="teaching">
            <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
            <h1>photographic principles, <br/><br/><br/>fall 2018</h1>
            <p> Thursday, 6-8PM (Evans 3) </p>
                <div className="navigation">
                    <div className="left">
                        Contact:
                    </div>
                    <div className="info">
                        OH: Sather Gate, W-F 9-10AM (Alan) <br/>Tuesday 12-1PM, Thursday 11-12PM (Jackie) <br/>
                        <a href="mailto:nguyenalan@berkeley.edu">nguyenalan@berkeley.edu</a><br/>
                        <a href="mailto:jackiexu@berkeley.edu">jackiexu@berkeley.edu</a>
                    </div>
                    <div className="resources">
                        <b>Resources:</b> <br/>
                        <a href="https://innovativedesign.club/">Innovative Design</a><br/>
                        <a href="/">Inspiration Sheet</a><br/>
                        <a href="/">Syllabus</a>
                    </div>
                    <div className="slides">
                        <b>Slides:</b> <br/>
                        <a href="/">Week 1: Introduction</a><br/>
                    </div>
                </div>
            </CSSTransitionGroup>
            </div>
        );
    }
}

