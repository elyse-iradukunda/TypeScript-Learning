type ProcessRecipe ={
    title: string;
    ingredients:{
        name:string;
        quantity:string | number;
        price?:number;
    }[]
    instructions?:string;
    }

const processRecipe = (recipe: ProcessRecipe) => {
  console.log(recipe.ingredients);
};

  processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: 4 },
    { name: 'Sugar', quantity: '1 cup', price: 5 },
  ],
  instructions: '...',
});


///


type direction="up"|"left"|"down"|"up";
function move(direction: direction, distance: number) {}

// TESTS

move('up', 10);
move('left', 5);

move(
  // @ts-expect-error - "up-right" is not a valid direction
  'up-right',
  10
);

move(
  // @ts-expect-error - "down-left" is not a valid direction
  'down-left',
  20
);

move(
  'up',
  // @ts-expect-error - "20" is not a valid distance
  '20'
);



///

type Order={
    customer:{
        address:string;
        name:string;
      

    }
}

const logOrder = (order: Order) => {
  console.log(`Shipping to: ${order.customer.address}`);
};

logOrder({
  customer: {
    name: 'Jane',
    address:"kimihurura",
  }
});

// last question in gates 

interface Car {
    brand: string;
    model: string;
    price: number;
}

function printCarModel(car: Car) {
    console.log(car.model.toUpperCase());
    console.log(car.price.toFixed(2));
}

printCarModel({ brand: "Toyota" , price: 3000,model:"chaliphonia"});

//remove those things of being optional and make price into it's type then add model as remaining property


// type assertion is here

 let values: number|string|never ;
 
 let inferd= values as string;
 
 inferd = 80;
 