module.exports = {
    siteMetadata: {
        title: 'Alan Nguyen'
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/posts/`,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 690
                        }
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe"
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-autolink-headers"
                ]
            }
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            }
        }
    ]
}
