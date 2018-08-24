import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'

export default class IndexPage extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.errors.forEach(({ message }) => {
            console.error(`BlogIndex render errr: ${message}`);
         });
        return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <div className="wrapper">
            <CSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
            <p>Hello! I'm a fourth-year undergrad who is studying computer science at UC Berkeley. I interned this past summer as a Software Engineer at Fox Networks and developing on video-centric products! Aside from my passion for technology, I am also an advocate of the visual medium, partaking in film and photography.</p>
            
            <h5>**website currently in progress, only viewable on MOBILE devices.</h5>

        </CSSTransitionGroup>
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
