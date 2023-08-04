import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
const authorLink = "https://unboundwellness.com/sweet-potato-chicken-poppers-paleo-aip-whole-30/";
const authorPhoto = "https://unboundwellness.com/wp-content/uploads/2019/09/headshot-330x330.jpg";
const authorName = "MICHELLE HOOVER, NTP";

return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Unbound Wellness</a> 
       </div>
    </div>
 );
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div>
           <h1>SWEET POTATO CHICKEN POPPERS</h1>
           <p>INGREDIENTS
1 lb ground chicken
2 cups uncooked sweet potato, finely grated 
2 tbsp coconut oil + 1 tsp for greasing the baking sheet
2 tbsp coconut flour
2 sprigs green onion, chopped fine
1 tbsp garlic powder
1 tbsp onion powder
1 tsp sea salt
1/2 tsp black pepper
Optional: 1 tsp paprika or chili powder
</p>
        <RecipeAuthor />
        </div>
       );
    }
 }

 export default RecipeDescription;