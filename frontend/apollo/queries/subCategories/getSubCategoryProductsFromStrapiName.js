import gql from "graphql-tag";
/*
Get main category  from subcategory name rens --> Ansiktspleie
*/
const GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY = gql`  
query Subcategory($nametoInsert:String!) {
    subCategories(where:{StrapiName:$nametoInsert}){ 
    StrapiName

    category{
      StrapiName
      name
      sub_categories
      {
        StrapiName
        categoryName
        description
      
      image{
        url
      }
      }
      
    }

    products
    {
      id
    ProductName
    pris
    ReviewScore
    ingredients
    directions
    Volume
    description

    image{
      url
    }}

 
  }

}
`;

export default GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY;  