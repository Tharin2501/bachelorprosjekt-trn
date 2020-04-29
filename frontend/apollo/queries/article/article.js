import gql from "graphql-tag";

// query for just one article pages/artikkel.js
// ID! = id cant be null

const ARTICLE_QUERY = gql`
    query articles($id: ID!) {
        article(id: $id) {
            id
            title
            introduction
            headerImage {
                url
            }
            content
            contentImage {
                url
            }
            productImage {
                url
            }
            productTitle
            productText
        }
    }
`;


export default ARTICLE_QUERY;
