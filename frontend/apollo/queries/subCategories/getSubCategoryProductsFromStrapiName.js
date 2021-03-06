import gql from "graphql-tag";
/*
Get main category  from subcategory name rens --> Ansiktspleie
*/
const GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY = gql`  
query Subcategory($categoryName:String!) {
  subCategories(where:{StrapiName:$categoryName}){
    StrapiName
    categoryName
    description
    
      type_of_products{
          StrapiName
          TypeOfProductName
      }
    
    category{
      StrapiName
      name

      image{
        url
    }
      sub_categories(sort: "categoryName:asc"){
        id
        StrapiName
        categoryName
        image{
        url
      	}


      
      }
    }
  
  
  }
  
}

  


`;

export default GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY;  