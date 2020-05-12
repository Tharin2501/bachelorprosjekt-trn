import gql from "graphql-tag";

const GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY = gql`  
query Subcategory($categoryName:String! ,$bulletPointsName:[String!]){
    subCategories(where:{StrapiName:$categoryName}){
       categoryName
       products(where: {bullet_point_on_skincare_products :{name:$bulletPointsName}}){
             id
       Strapiname
       ProductName
       description
       pris
       ReviewScore
       ingredients
       Volume
       directions
       image{
         url
       }
         bullet_point_on_skincare_products{
       id
       name
     }
       }
     }
 }
`;

export default GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY;  
