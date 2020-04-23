import gql from "graphql-tag";

// query for just one article pages/artikkel.js
const ARTICLE_QUERY = gql`
    query Articles($id: ID!) {
        article(id: $id) {
            id
            title
            introduction
            headerimage {
                url
            }
            content
            contentimage {
                url
            }
        }
    }
`;

export default ARTICLE_QUERY;
