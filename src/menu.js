"use strict";

const content = document.getElementById("content");

const loadMenu = function () {
  const html = `      <section class="section-meals">
    <div class="container meals-header">
      <span class="subheading">Meals</span>
      <h2 class="heading-secondary">Omnifood AI chooses from 5,000+ recipes</h2>
    </div>
    <div class="container meals grid grid--3-cols margin-bottom-md">
      <div class="meal-card">
        <img class="meal-img" src="../assets/img/meals/meal-1.jpg" alt="Dishes of japanese food">
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag--vegetarian">Vegetarian</span>
          </div>
          <p class="meal-title">Japanese Gyozas</p>
          <ul class="meal-attributes list">
            <li>
              <ion-icon class="list-icon" name="flame-outline"></ion-icon>
              <span><strong>650</strong> calories</span>
            </li>
            <li>
              <ion-icon class="list-icon" name="restaurant-outline"></ion-icon>
              <span>NutriScore ® <strong>74</strong></span>
            </li>
            <li>
              <ion-icon class="list-icon" name="star-outline"></ion-icon>
              <span><strong>4.9</strong> rating (537)</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="meal-card">
        <img class="meal-img" src="../assets/img/meals/meal-2.jpg" alt="Dishes of japanese food">
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag--vegan">Vegan</span>
            <span class="tag tag--paleo">Paleo</span>
          </div>
          <p class="meal-title">Avocado Salad</p>
          <ul class="meal-attributes list">
            <li>
              <ion-icon class="list-icon" name="flame-outline"></ion-icon>
              <span><strong>400 </strong> calories</span>
            </li>
            <li>
              <ion-icon class="list-icon" name="restaurant-outline"></ion-icon>
              <span>NutriScore ® <strong>92</strong></span>
            </li>
            <li>
              <ion-icon class="list-icon" name="star-outline"></ion-icon>
              <span><strong>4.8 </strong> rating (441)</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="diets ">
        <h3 class="heading-tertiary">Works with any diet:</h3>

        <ul class="diets-list list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Vegetarian</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Vegan</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Pescatarian</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Gluten-free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Lactose-free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Keto</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Paleo</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Low FODMAP</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Kid-friendly</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container all-recipes">
      <a class="link" href="#">See all recipes &rarr;</a>
    </div>
  </section>
  <section class="section-testimonials">
    <div class="testimonials-container">
      <span class="subheading">Testimonials</span>
      <h2 class="heading-secondary">Once you try it, you can't go back</h2>
    
      <div class="testimonials ">
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/dave.jpg" alt="">
          <blockquote class="testimonial-text">Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</blockquote>
          <span class="testimonial-name">— Dave Bryson</span>
        </figure>
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/ben.jpg" alt="">
          <blockquote class="testimonial-text">The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</blockquote>
          <span class="testimonial-name">— Ben Hadley</span>
        </figure>
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/steve.jpg" alt="">
          <blockquote class="testimonial-text">Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</blockquote>
          <span class="testimonial-name">— Steve Miller</span>
        </figure>
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/hannah.jpg" alt="">
          <blockquote class="testimonial-text">I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</blockquote>
          <span class="testimonial-name">— Hannah Smith</span>
        </figure>
      </div>
    </div>
    <div class="gallery ">
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-1.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-2.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-3.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-4.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-5.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-6.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-7.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-8.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-9.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-10.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-11.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-12.jpg" alt="photo of food">
        </figure>
    </div>
  </section>`;

  content.innerHTML = "";
  content.insertAdjacentHTML("afterbegin", html);
};

export default loadMenu;
