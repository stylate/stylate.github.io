import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'
import Icons from '../layouts/icons'
import Sidebar from '../layouts/sidebar'

export default class IndexPage extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.errors.forEach(({ message }) => {
            console.error(`BlogIndex render errr: ${message}`);
         });
        return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <div className="container">
            <div className="home-wrapper">
            <CSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
            <h2>alan nguyen—</h2>
            <p>currently redoing this whole website. see you in a month from now. check out my progress <a href="https://github.com/stylate/portfolio/tree/dev">here</a>.</p>
            <p>also currently interning as a software engineer @ <a href="https://www.akamai.com/">akamai</a>.</p>
            <br/>
            <Icons/>
        </CSSTransitionGroup>
            </div>
            </div>
        );
    }
}


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
