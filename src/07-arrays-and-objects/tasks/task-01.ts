/**
 * Module 07: Arrays & Objects — Task 01
 *
 * Instructions:
 * 1. Implement each function using array/object methods.
 * 2. Run: npm run example src/07-arrays-and-objects/tasks/task-01.ts
 */

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Pen", price: 1.5 },
  { id: 2, name: "Notebook", price: 3.0 },
  { id: 3, name: "Eraser", price: 0.5 },
  { id: 4, name: "Ruler", price: 2.0 },
];

function getTotalPrice(items: Product[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function getProductNames(items: Product[]): string[] {
  return items.map((item) => item.name);
}

function getAffordable(items: Product[], maxPrice: number): Product[] {
  return items.filter((item) => item.price < maxPrice);
}

function findProductById(items: Product[], id: number): Product | undefined {
  return items.find((item) => item.id === id);
}

function updatePrice(product: Product, newPrice: number): Product {
  return { ...product, price: newPrice };
}


console.log("getTotalPrice:", getTotalPrice(products)); // expected: 7
console.log("getProductNames:", getProductNames(products)); // expected: ["Pen", "Notebook", "Eraser", "Ruler"]
console.log("getAffordable(<2):", getAffordable(products, 2)); // expected: Pen and Eraser
console.log("findProductById(2):", findProductById(products, 2)?.name); // expected: "Notebook"
console.log("updatePrice:", updatePrice(products[0], 2.0)); // expected: { id: 1, name: "Pen", price: 2.0 }


