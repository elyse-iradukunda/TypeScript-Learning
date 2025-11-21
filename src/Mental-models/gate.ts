function calculateTotal(items:{price:number}[]):number{
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return parseInt(total.toFixed(2));
}

function applyDiscount(amount:number, discount:number):number {
  const discountedAmount = amount - (amount * discount);
  return discountedAmount;
}

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 79 }
];

const total  = calculateTotal(products);
const discounted:number = applyDiscount(total, 0.1);


// the first question you have to understand 👌


class Counter {
  static count:number = 0;

  increment() {
    Counter.count++;
  }

  static getCount():number {
    return Counter.count; 
  }
}

// second question about gate preparation

 enum recipe{
  ingredients="Here is the ingrediengs"
}

const processRecipe = (recipe: recipe) => {
  console.log(recipe);
};

type processRecipe=({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: 4 },
    { name: 'Sugar', quantity: '1 cup', price: 5 },
  ],
  instructions: '...',
});


