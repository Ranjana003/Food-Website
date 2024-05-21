
import classes from './homePage.module.css';
import Footer from '../../components/Footer/Footer';


export default function HomePage() {
  return (
    
    <><div style={{ backgroundImage: 'linear-gradient(to right, #434343 10%, black 100%)',
                    marginTop:'-1.6rem',
                    paddingTop:'0',
                     
                    }}>
          {/* <div className={classes.home}>
              <div className={classes.main_slide}>
                  <div>
                      <img src="foods/FFpT.png" alt="" />
                  </div>
              </div> */}
              <section className={classes.grid}>
                <div className={classes.content}>
                <div className={classes['content-left']}>
                    <div className={classes.info}>
                    <h2>
                        <div>Find Your Best</div>
                        <div>Feast Fast</div>
                    </h2>
                    <p> 
                        <div>Hey, Our Delicious food awaits you</div>
                        <div>We are always near to you with finger-licking Meal</div>
                    </p>
                    </div>
                    <button className={classes.button}> Explore Food </button>
                </div>
                
                <div className={classes['content-right']}>
                    <img src="foods/homepage.png" alt=""></img>
                </div>
                </div>
                
              </section>


             
             {/* <div className={classes.main_slide2}>
                  <div className={classes.foodimg}>
                      <img src="foods/Plate1.png" alt="food item" />
                  </div>
                  <div className={classes.question}>
                      <div>
                          <h2>Why People Choose Us?</h2>
                      </div>
                      <div>
                          <div className={classes.q_ans}>
                              <div>
                                  <img src="foods/Plate2.png" alt="" />
                              </div>
                              <div>
                                  <h4>Choose your favourite</h4>
                                  <p>lorem ipsum dolor sit amet comsecutive aldipising aelit. nukla quas dolrel!</p>
                              </div>
                          </div>
                          <div className={classes.q_ans}>
                              <div>
                                  <img src="foods/Plate3.png" alt="" />
                              </div>
                              <div>
                                  <h4>Choose your favourite</h4>
                                  <p>lorem ipsum dolor sit amet comsecutive aldipising aelit. nukla quas dolrel!</p>
                              </div>
                          </div>
                          <div className={classes.q_ans}>
                              <div>
                                  <img src="foods/Plate4.png" alt="" />
                              </div>
                              <div>
                                  <h4>Choose your favourite</h4>
                                  <p>lorem ipsum dolor sit amet comsecutive aldipising aelit. nukla quas dolrel!</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              /*}

             
                
              
             {/* <div className={classes.main_slide3}>
                  <div className={classes.fav_head}>
                      <h3>Our Popular Food Items</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                          Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                          Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                      </p>
                  </div>
                  <div className={classes.fav_food}>
                      <div className={classes.item}>
                          <div>
                              <img src="foods/plate2.png" alt="" />
                          </div>
                          <h3>Food name</h3>
                          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                          </p>
                          <p className={classes.fav_price}>₹250.00</p>
                      </div>
                      <div className={classes.item}>
                          <div>
                              <img src="foods/plate3.png" alt="" />
                          </div>
                          <h3>Food name</h3>
                          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                          </p>
                          <p className={classes.fav_price}>₹250.00</p>
                      </div>
                      <div className={classes.item}>
                          <div>
                              <img src="foods/plate4.png" alt="" />
                          </div>
                          <h3>Food name</h3>
                          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                          </p>
                          <p className={classes.fav_price}>₹250.00</p>
                      </div>
                      <div className={classes.item}>
                          <div>
                              <img src="foods/plate1.png" alt="" />
                          </div>
                          <h3>Food name</h3>
                          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                          </p>
                          <p className={classes.fav_price}>₹250.00</p>
                      </div>
                  </div>
                  <div className={classes.dsgn}></div>


              </div>
  */}

              {/*<div className={classes.main_slide4}>
                  <div className={classes.chef_feed}>
                      <h2>Customer <span style={{ color: "red" }}>Feedback</span></h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                      </p>
                      <div className={classes.chef_detail}>
                          <div>
                              <img src="foods/logo1.png" alt="" />
                          </div>
                          <div>
                              <h6>Friday Food Point</h6>
                              <p>Web Developer</p>
                          </div>
                      </div>
                      <div className={classes.chef_vic}>
                          <div>
                              <i className="fa-solid fa-hand-peace"></i>
                              <h4>68</h4>
                              <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                          <div>
                              <i className="fa-solid fa-trophy"></i>
                              <h4>956</h4>
                              <p>Lorem ipsum dolor sit amet consectetur.</p>
                          </div>
                      </div>
                  </div>
                  <div className={classes.chef}>
                      <img src="foods/plate2.png" alt="" />
                  </div>
              </div>

              <div className={classes.letter}>
                  <div className={classes.letter_head}>
                      <h2> Subscribe <span> Newsletter</span></h2>
                  </div>
                  <div className={classes.letter_input}>
                      <div>
                          <input type="email" placeholder="Exapmle.com" />
                      </div>
                      <button className={classes.yellow_btn}> Subscribe</button>
                  </div> 


              </div> */}
              
              
<Footer />             
</div>
    </>

  );
}

/*
<div className={classes.fooditems}>
<div className={classes.item}>
  <div>
        <img src="foods/MainCourse.png" alt="food item" />
    </div>
    <h3>Main Course</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
    <button className={classes.white_btn}>See Menu</button>
</div>
<div className={classes.item}>
    <div>
        <img src="foods/Snacks.png" alt="food item" />
    </div>
    <h3>Snacks</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
    <button className={classes.yellow_btn}>See Menu</button>
</div>
<div className={classes.item}>
    <div>
        <img src="foods/Desserts.png" alt="food item" />
    </div>
    <h3>Desserts</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
    <button className={classes.white_btn}>See Menu</button>
</div>
</div>
*/