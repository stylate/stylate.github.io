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

            <h1>alan nguyen—</h1>
            <p> hello! i'm currently a fourth year undergrad at UC Berkeley studying computer science. my passions lie in intersecting technology and media of all sorts. <br/><br/></p>
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
