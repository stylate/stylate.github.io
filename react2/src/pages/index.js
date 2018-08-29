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

		    <p>Greetings! I'm an undergrad student, currently attending UC Berkeley as a junior. I enjoy chatting about artificial intelligence and anything media related–film, music, photos, you name it. </p>

            <p>In here, you'll find a small photography portfolio and a personal blog chronicling the movies that I've watched recently. Enjoy your stay!</p>
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
