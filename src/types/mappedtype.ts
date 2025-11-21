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