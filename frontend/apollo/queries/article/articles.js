import gql from "graphql-tag";

// query for multiple articles

const ARTICLES_QUERY = gql`
    query articles {
        articles {
            id
            introduction
            title
            headerImage {
                url
            }
            category
        }
    }
`;

export default ARTICLES_QUERY;
