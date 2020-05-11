import gql from "graphql-tag";

const GETQUIZQUESTION_QUERY = gql`  
query quiz{
    quizdata{
      quizName
      quizJSONdata
    }
  }
`;

export default GETQUIZQUESTION_QUERY;  