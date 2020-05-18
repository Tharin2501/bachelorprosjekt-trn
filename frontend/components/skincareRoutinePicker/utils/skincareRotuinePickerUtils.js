export const setProgressBarValue = (stepnumber) => {
    if (stepnumber === 1) {
        return 33;
    }

    if (stepnumber === 2) {
        return 66;
    }
    if (stepnumber === 3) {
        return 100;
    }

}

export const filterProductsFunction = (products, filterArray) => {
    const matchesNeed = filterArray.length; // flytt ut
    var resultarray = [];

    for (var product of products) {
        resultarray.push(compareFiltersToOneProduct(matchesNeed, product, filterArray));
    }
    // remove udefined
    resultarray = resultarray.filter(function (product) {
        return product != null;
    })

    return resultarray;


}

export const compareFiltersToOneProduct = (matchesRequired, product, filterArray) => {

    var curretMatches = 0;


    for (var i = 0; i < product.bullet_point_on_skincare_products.length; i++) {
        for (var filter of filterArray) {

            if (product.bullet_point_on_skincare_products[i].name === filter) {
                ++curretMatches;

                if (curretMatches === matchesRequired) {
                    return product;
                }
                break;

            }
        }
    }

}