import gql from "graphql-tag";

const ARTICLES_QUERY_WITHLIMIT = gql`
    query articles {
        articles(limit: 3) {
            id
            introduction
            title
            headerImage {
                url
                alternativeText
            }
            category
        }
    }
`;

export default ARTICLES_QUERY_WITHLIMIT;
