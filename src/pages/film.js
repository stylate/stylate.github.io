import React from 'react'
import Link from 'gatsby-link'


export default class Movies extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.errors.forEach(({ message }) => {
            console.error(`BlogIndex render errr: ${message}`);
         });
        return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <div className="wrapper">
                in progress <br/>
                    {this.props.data.allMarkdownRemark.edges.map(({ node }, i) => (
                    <Link to={node.frontmatter.path} key={i}>{node.frontmatter.title}</Link>
                ))}
            </div>
        );
    }
}


export const query = graphql`
  query MovieQuery {
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

