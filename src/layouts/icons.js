import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './icons.scss';
import './icons/scss/font-awesome.scss';
import resume from '../../docs/resume.pdf';

class Icons extends React.Component {
    render() {
        let icon;
        if (window.location.pathname != "/decal") {
            icon = <div className="icons">
                <a href="https://github.com/stylate"><i className="fa fa-github fa-fw"></i></a>
                <a href="https://instagram.com/alanstheory"><i className="fa fa-instagram fa-fw"></i></a>
                <a href="https://letterboxd.com/carbine"><i className="fa fa-film fa-fw"></i></a>
                <a href="https://open.spotify.com/user/flexcy_?si=K2yrBitRSP-l0F8WphXsUQ"><i className="fa fa-spotify fa-fw"></i></a>
                <a href={resume}><i className="fa fa-file-o fa-fw"></i></a>
            </div>
        } else {
            icon = <div/>
        }
        return (
            icon
        )
    }
}

export default Icons;
