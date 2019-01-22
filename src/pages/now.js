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

            <p>This is a personal page dedicated to what I'm currently up to this semester!</p>

            <h3>Website Redesign</h3>
            <p>This website's codebase is at the moment very, very messy (and outdated)! I've been using Gatsby and CSS Modules to maintain this website and its aesthetics. </p>
            
            <p>Over the span of this ongoing semester, I'm in the process of learning more front-end web development for personal enjoyment, while simultaneously switching to styled components, Jekyll, and React and building the website from scratch!</p>
            <p>I also plan on completely separating my photography from this personal website in order to maintain full creative control over their respective web designs without compromise.</p>

            <h3>Education</h3>
            <p>This semester is currently dedicated to me being engaged in more project-based work, as well as tutoring! Aside from being involved with <a href="https://csmberkeley.github.io/#/">CS Mentors</a> for UC Berkeley's introductory Data Structures course, I'm enrolled in a series of project-based computer science courses:</p>
            <ul>
                <li>Computer Graphics</li>
                <li>Computer Security</li>
                <li>Databases</li>
            </ul>

            <h3>Web Animation</h3>
            <p>I started a fun little side project called <b>Synthony</b>! It's essentially a music visualizer built in WebGL and ThreeJS. I've grown a bigger interest in computer graphics as of late and thought that this would be fun to work on. Feel free to track my progress <a href="https://github.com/stylate/Synthony">here</a>.</p>

            <h3>Spotify</h3>
            <p>One of my fun facts is that my Spotify playlists are color coded based on album cover and the "mood" that they feed off. I've been working with a team of three to turn this cool, super extra idea into code. Feel free to track its progress <a href="https://github.com/Kaden-Dippe/spotify-colorized">here</a>.</p>

            <h3>Photo/Film</h3>
            <p>I'm currently co-leading a photography team as part of <a href="https://innovativedesign.club/">Innovative Design</a>, as well as making an attempt to visit a lot of older directors and their work.</p>
            </CSSTransitionGroup>
            </div>
        </div>
        );
    }
}
