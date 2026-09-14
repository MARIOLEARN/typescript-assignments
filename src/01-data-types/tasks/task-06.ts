/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    productName: string;
    productCode: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeightInkg: number;
    averageCustomerRatingFrom1to5: number;
    discounted: boolean;
}

const product1: product = {
    productName: "television",
    productCode: "tvc12345",
    sellingPrice: 2.340,
    stockQuantity: 23,
    productWeightInkg: 20,
    averageCustomerRatingFrom1to5: 4,
    discounted: true,
}

const product2: product = {
    productName: "speaker",
    productCode: "tyu54321",
    sellingPrice: 1.640,
    stockQuantity: 26,
    productWeightInkg: 15,
    averageCustomerRatingFrom1to5: 5,
    discounted: true,
}

const product3: product = {
    productName: "sofa",
    productCode: "pic23145",
    sellingPrice: 5.350,
    stockQuantity: 17,
    productWeightInkg: 37,
    averageCustomerRatingFrom1to5: 4,
    discounted: false,
}

console.log(product1);
console.log(product2);
console.log(product3);