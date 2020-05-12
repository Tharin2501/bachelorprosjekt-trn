/* ID VERR
query SubCategory ($nametoInsert:String! = "toner_facecare" ,$brandName:String! = "5e7b77e37c390600175fdd03"){
    subCategories(where:{StrapiName:$nametoInsert}) {

        StrapiName
        id

        products(where:{brand:{id:$brandName}}){
            Strapiname
          ProductName
          pris
          Volume

          brand{
            id
            name
          }
        }





    }
  }
*/



import gql from "graphql-tag";
/*
Get main category  from subcategory name rens --> Ansiktspleie
*/

const GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY = gql`  

query SubCategory ($subCategoryName:String!,$brandName:String!){
    subCategories(where:{StrapiName:$subCategoryName}) {
             
        StrapiName
        id
        
        products(where:{brand:{name:$brandName}}){
            Strapiname
          ProductName
          pris
          Volume
          
          image{
            url
          }

          brand{
            id
            name
          }
        }
           
      

    }
  }
`;

export default GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY;  