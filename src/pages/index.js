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

            <p>Hello! I'm currently a third-year undergrad who is studying computer science at UC Berkeley. Aside from my passion for software engineering, I love to tinker with cool technologies in the realm of media and communication.</p>
            
            <p>Outside of school, I am an advocate for the visual and performing arts–a sucker for film, urban & contemporary dance, music production, and photography!</p>
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
