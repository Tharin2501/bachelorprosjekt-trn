import gql from "graphql-tag";

// query for multiple articles

const ARTICLES_CATEGORY= gql`
    query articles {
        articles(limit:3 where:{category: "Solbeskyttelse"}) {
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



export default ARTICLES_CATEGORY;
