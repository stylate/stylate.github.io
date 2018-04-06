import React from 'react'
import Link from 'gatsby-link'

export default class Resume extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.errors.forEach(({ message }) => {
            console.error(`BlogIndex render errr: ${message}`);
         });
        return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <script>setTimeout(function(){window.location.href="http://www.alandn.com/static/resume.6d57296a.pdf"},0);</script>
        );
    }
}


