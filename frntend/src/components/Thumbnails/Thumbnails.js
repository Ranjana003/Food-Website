import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/SeeMoreButton/Button';
// import classes from './thumbnails.module.css';
import './thumbnails.css';
export default function Thumbnails({ foods }) {
  return (
    <div className='main_page'>
    
    <div className='food_card'>
      {foods.map(food => (
        <div key={food.id} className='card'>
          <Link to={`/food/${food.id}`}>
            <div className='food_img'>
              <img
              src={`${food.imageUrl}`}
              alt={food.name} />
              </div>

            <div className='content'>
              <div className='name'>
                <h2>{food.name}</h2>
                <h4>{food.price}/-</h4>
                <Button text="See More" />
              
              
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
    
      );
    }



  
    // <ul className={classes.list}>
    //   {foods.map(food => (
    //     <li key={food.id}>
    //       <Link to={`/food/${food.id}`}>
    //         <img
    //           className={classes.image}
    //           src={`${food.imageUrl}`}
    //           alt={food.name}
    //         />

    //         <div className={classes.content}>
    //           <div className={classes.name}>{food.name}</div>
    //           <span
    //             className={`${classes.favorite} ${
    //               food.favorite ? '' : classes.not
    //             }`}
    //           >
    //             ❤
    //           </span>
    //           <div className={classes.stars}>
    //             <StarRating stars={food.stars} />
    //           </div>
    //           <div className={classes.product_item_footer}>
    //             <div className={classes.origins}>
    //               {food.origins.map(origin => (
    //                 <span key={origin}>{origin}</span>
    //               ))}
    //             </div>
    //             <div className={classes.cook_time}>
    //               <span>🕒</span>
    //               {food.cookTime}
    //             </div>
    //           </div>
    //           <div className={classes.price}>
    //             <Price price={food.price} />
    //           </div>
    //         </div>
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
//   );
// }