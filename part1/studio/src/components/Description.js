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
           <p>Are you a chicken nugget fan? Or maybe you have one in the family? 
            I feel you! Chicken nuggets are life, and I was obsessed for the first
             half of my life. Okay maybe more. Chicken nuggets are one of those 
             foods that seems like youd never be able to make them with real food… 
             think again! These sweet potato chicken poppers are the real food, adult version of the chicken nuggets that I loved for years!</p>
        <RecipeAuthor />
        </div>
       );
    }
 }

 export default RecipeDescription;