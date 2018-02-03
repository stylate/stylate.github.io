import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
            <h1>ALAN NGUYEN</h1>

            <p>Hello! I'm a third-year undergraduate student, studying computer science at UC Berkeley. I enjoy tinkering with code and applying it to media platforms like music and whatnot.</p>

            <p>Aside from school, I'm a total film junkie who binges (and writes about) critically acclaimed films and television shows on the daily. I also enjoy taking lots of lifestyle and landscape photos as well! </p>
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
