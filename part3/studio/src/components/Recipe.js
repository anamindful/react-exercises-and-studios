const RecipeAuthor = () => {
   let authorLink = "https://bakingmischief.com/no-chill-small-batch-chocolate-chip-cookies/";
   let authorPhoto = "https://bakingmischief.com/wp-content/uploads/2017/03/baking-mischief-about-tracy.jpg";
   let authorName = "Tracy";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>{"https://bakingmischief.com/no-chill-small-batch-chocolate-chip-cookies/"}</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "all-purpose flour",
      "baking soda",
      "sugar",
      "butter",
      "chocolate chips"
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   const recipeTitle = "Chocolate Chip Cookies";
   const RecipeDescription = "Small-batch Cookies!"

   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   const cookiePic = "https://i2.wp.com/bakingmischief.com/wp-content/uploads/2017/02/small-batch-chocolate-chip-cookies-ohphoto.jpg";

   return (
      <img src="{cookiePic}" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}