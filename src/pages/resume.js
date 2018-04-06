import React from 'react'
import Link from 'gatsby-link'
import resume from '../../docs/resume.pdf';

export default class Resume extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.errors.forEach(({ message }) => {
            console.error(`BlogIndex render errr: ${message}`);
         });
        return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <script>setTimeout(function(){window.location.href={resume}},0);</script>
        );
    }
}


