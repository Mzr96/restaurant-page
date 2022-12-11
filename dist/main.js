/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const content = document.getElementById("content");

const loadContact = function () {
  const html = `      <section class="section-pricing">
    <div class="pricing-header container">
      <span class="subheading">Pricing</span>
      <h2 class="heading-secondary">Eating well without breaking the bank</h2>
    </div>
    <div class="container grid grid--2-cols margin-bottom-md">
      <div class="pricing-plan pricing-plan--starter">
        <header class="plan-header">
          <p class="plan-name">Starter</p>
          <p class="plan-price"><span>$</span>399</p>
          <p class="plan-text">per month. That's just $13 per       meal!</p>
        </header>
        <ul class="plan-attributes list">
          <li class="list-item">
            <ion-icon class="list-icon"  name="checkmark-outline"></ion-icon>
            <span>1 meal per day</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Order from 11am to 9pm</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Delivery is free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="close-outline"></ion-icon>
          </li>
        </ul>
        <div class="plan-sign-up">
          <a class="btn btn--full " href="#">Start eating well</a>
        </div>
      </div>
      <div class="pricing-plan pricing-plan--complete">
        <header class="plan-header">
          <p class="plan-name">Complete</p>
          <p class="plan-price"><span>$</span>649</p>
          <p class="plan-text">per month. That's just $11 per meal!</p>
        </header>
        <ul class="plan-attributes list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span><strong>2 meals</strong> per day</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Order <strong>24/7</strong></span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Delivery is free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Get access to latest recipes</span>
          </li>
        </ul>
        <div class="plan-sign-up">
          <a class="btn btn--full" href="#">Start eating well</a>
        </div>
      </div>
    </div>
    <div class="container grid">
      <aside class="plan-details">
        Prices include all applicable taxes. You can cancel at any time. Both plans include the following:
      </aside>
    </div>
    <div class="container grid grid--4-cols">
      <div class="feature">
        <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>  
        <p class="feature-title">Never cook again!</p>
        <p class="feature-text">Our subscriptions cover 365 days per year, even including major holidays.</p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
        <p class="feature-title">Locale and organic</p>
        <p class="feature-text">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
        <p class="feature-title">No waste</p>
        <p class="feature-text">All our partners only use reusable containers to package all your meals.</p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="pause-outline"></ion-icon> 
        <p class="feature-title">Pause anttime</p>
        <p class="feature-text">Going on vacation? Just pause your subscription, and we refund unused days.</p>
      </div>
    </div>
  </section>
  <section class="section-cta">
    <div class="container">
      <div class="cta">
        <div class="cta-text-box">
          <h2 class="heading-secondary">Get your first meal for free!</h2>
          <p class="cta-text">Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
          <form class="cta-form" action="#">
            <div>
              <label for="full-name">Full Name</label>
              <input required placeholder="John Smith"  type="text" name="full-name" id="full-name">
            </div>
            <div>
              <label for="email">Email address</label>
              <input required type="email" placeholder="me@example.com" name="email" id="email">
            </div>
            <div>
              <label for="select-where">Where did you hear from us?</label>
              <select required name="select-where" id="select-where">
                <option value="">Please choose one option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div class="input-field">
            <button class="btn btn--form">Sign up now</button>
          </form>
        </div>
        <div class="cta-img-box" role="img" aria-label="Woman enjoying food ">
          <!-- <img class="cta-img" src="./img/eating.jpg" alt=""> -->
        </div>
      </div>
    </div>
  </section>`;

  content.innerHTML = "";
  content.insertAdjacentHTML("afterbegin", html);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// import HeroImg from "../assets/img/hero.png";

const content = document.querySelector("#content");
const loadHome = function () {
  const html = `
  <main>
  <section class="section-hero">
    <div class="hero">
      <div class="hero-text-box">
        <h1 class="heading-primary">
          A healthy meal delivered to your door, every single day
        </h1>
        <p class="hero-description">
          The smart 365-days-per-year food subscription that will make you
          eat healthy again. Tailored to your personal tastes and
          nutritional needs.
        </p>
        <a class="btn btn--full margin-right-sm" href="#"
          >Start eating well</a
        >
        <a class="btn btn--outline" href="#">Learn more &darr;</a>
        <div class="delivered-meals">
          <div class="delivered-imgs">
            <img
              src="../assets/img/customers/customer-1.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-2.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-3.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-4.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-5.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-6.jpg"
              alt="customer photo"
            />
          </div>
          <p class="delivered-text">
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>

      <img
        class="hero-img"
        src="../assets/img/hero.png"
        alt="Woman enjoying food"
      />
    </div>
  </section>
  <section class="section-featured-in">
    <div class="container featured-in">
      <h2 class="heading-featured-in">As featured in</h2>
      <div class="logos">
        <img class="featured-in-img" src="../assets/img/logos/techcrunch.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/business-insider.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/the-new-york-times.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/forbes.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/usa-today.png" alt="Company logo">
      </div>
    </div>
  </section>
  <section class="section-how">
    <div class="how container grid grid--2-cols">
      <div class="how-header">
        <span class="subheading">HOW IT WORKS</span>
        <h2 class="heading-secondary">Your daily dose of health in 3 simple steps</h3>
      </div>
      <div class="step-text-box">
        <p class="step-number">01</p>
        <h3 class="heading-tertiary">Tell us what you like (and what not)</h3>
        <p class="step-description">Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
      </div>
      <div class="step-img-box">
        <img class="step-img" src="../assets/img/app/app-screen-1.png" alt="">
      </div>

      <div class="step-img-box">
        <img class="step-img" src="../assets/img/app/app-screen-2.png" alt="">
      </div>
      <div class="step-text-box">
        <p class="step-number">02</p>
        <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
        <p class="step-description">Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
      </div>
      
      
      <div class="step-text-box">
        <p class="step-number">03</p>
        <h3 class="heading-tertiary">Receive meals at convenient time</h3>
        <p class="step-description">Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
      </div>
      <div class="step-img-box">
        <img class="step-img" src="../assets/img/app/app-screen-3.png" alt="">
      </div>
    </div>
  </section>
</main> 
`;
  content.innerHTML = "";
  content.insertAdjacentHTML("afterbegin", html);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const navList = document.querySelector(".main-nav-list");

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
navList.addEventListener("click", function (e) {
  if (e.target.classList.contains("home-btn")) (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (e.target.classList.contains("meals-btn")) (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (e.target.classList.contains("pricing-btn")) (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2SWQ7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuSFg7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNsTHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ29CO0FBQ0E7QUFDTzs7QUFFeEM7O0FBRUEsb0RBQVE7QUFDUjtBQUNBLCtDQUErQyxvREFBUTtBQUN2RCxnREFBZ0Qsb0RBQVE7QUFDeEQsa0RBQWtELHVEQUFZO0FBQzlELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBodG1sID0gYCAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1wcmljaW5nXCI+XG4gICAgPGRpdiBjbGFzcz1cInByaWNpbmctaGVhZGVyIGNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+UHJpY2luZzwvc3Bhbj5cbiAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctc2Vjb25kYXJ5XCI+RWF0aW5nIHdlbGwgd2l0aG91dCBicmVha2luZyB0aGUgYmFuazwvaDI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkIGdyaWQtLTItY29scyBtYXJnaW4tYm90dG9tLW1kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpY2luZy1wbGFuIHByaWNpbmctcGxhbi0tc3RhcnRlclwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicGxhbi1oZWFkZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsYW4tbmFtZVwiPlN0YXJ0ZXI8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwbGFuLXByaWNlXCI+PHNwYW4+JDwvc3Bhbj4zOTk8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwbGFuLXRleHRcIj5wZXIgbW9udGguIFRoYXQncyBqdXN0ICQxMyBwZXIgICAgICAgbWVhbCE8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8dWwgY2xhc3M9XCJwbGFuLWF0dHJpYnV0ZXMgbGlzdFwiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj4xIG1lYWwgcGVyIGRheTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPk9yZGVyIGZyb20gMTFhbSB0byA5cG08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5EZWxpdmVyeSBpcyBmcmVlPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2xvc2Utb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tc2lnbi11cFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi0tZnVsbCBcIiBocmVmPVwiI1wiPlN0YXJ0IGVhdGluZyB3ZWxsPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByaWNpbmctcGxhbiBwcmljaW5nLXBsYW4tLWNvbXBsZXRlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJwbGFuLWhlYWRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwicGxhbi1uYW1lXCI+Q29tcGxldGU8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwbGFuLXByaWNlXCI+PHNwYW4+JDwvc3Bhbj42NDk8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwbGFuLXRleHRcIj5wZXIgbW9udGguIFRoYXQncyBqdXN0ICQxMSBwZXIgbWVhbCE8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8dWwgY2xhc3M9XCJwbGFuLWF0dHJpYnV0ZXMgbGlzdFwiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+MiBtZWFsczwvc3Ryb25nPiBwZXIgZGF5PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+T3JkZXIgPHN0cm9uZz4yNC83PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+RGVsaXZlcnkgaXMgZnJlZTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPkdldCBhY2Nlc3MgdG8gbGF0ZXN0IHJlY2lwZXM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tc2lnbi11cFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi0tZnVsbFwiIGhyZWY9XCIjXCI+U3RhcnQgZWF0aW5nIHdlbGw8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkXCI+XG4gICAgICA8YXNpZGUgY2xhc3M9XCJwbGFuLWRldGFpbHNcIj5cbiAgICAgICAgUHJpY2VzIGluY2x1ZGUgYWxsIGFwcGxpY2FibGUgdGF4ZXMuIFlvdSBjYW4gY2FuY2VsIGF0IGFueSB0aW1lLiBCb3RoIHBsYW5zIGluY2x1ZGUgdGhlIGZvbGxvd2luZzpcbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkIGdyaWQtLTQtY29sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVcIj5cbiAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwiZmVhdHVyZS1pY29uXCIgbmFtZT1cImluZmluaXRlLW91dGxpbmVcIj48L2lvbi1pY29uPiAgXG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS10aXRsZVwiPk5ldmVyIGNvb2sgYWdhaW4hPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtdGV4dFwiPk91ciBzdWJzY3JpcHRpb25zIGNvdmVyIDM2NSBkYXlzIHBlciB5ZWFyLCBldmVuIGluY2x1ZGluZyBtYWpvciBob2xpZGF5cy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlXCI+XG4gICAgICAgIDxpb24taWNvbiBjbGFzcz1cImZlYXR1cmUtaWNvblwiIG5hbWU9XCJudXRyaXRpb24tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS10aXRsZVwiPkxvY2FsZSBhbmQgb3JnYW5pYzwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLXRleHRcIj5PdXIgY29va3Mgb25seSB1c2UgbG9jYWwsIGZyZXNoLCBhbmQgb3JnYW5pYyBwcm9kdWN0cyB0byBwcmVwYXJlIHlvdXIgbWVhbHMuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZVwiPlxuICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJmZWF0dXJlLWljb25cIiBuYW1lPVwibGVhZi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+Tm8gd2FzdGU8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS10ZXh0XCI+QWxsIG91ciBwYXJ0bmVycyBvbmx5IHVzZSByZXVzYWJsZSBjb250YWluZXJzIHRvIHBhY2thZ2UgYWxsIHlvdXIgbWVhbHMuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZVwiPlxuICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJmZWF0dXJlLWljb25cIiBuYW1lPVwicGF1c2Utb3V0bGluZVwiPjwvaW9uLWljb24+IFxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtdGl0bGVcIj5QYXVzZSBhbnR0aW1lPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtdGV4dFwiPkdvaW5nIG9uIHZhY2F0aW9uPyBKdXN0IHBhdXNlIHlvdXIgc3Vic2NyaXB0aW9uLCBhbmQgd2UgcmVmdW5kIHVudXNlZCBkYXlzLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1jdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3RhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdGEtdGV4dC1ib3hcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nLXNlY29uZGFyeVwiPkdldCB5b3VyIGZpcnN0IG1lYWwgZm9yIGZyZWUhPC9oMj5cbiAgICAgICAgICA8cCBjbGFzcz1cImN0YS10ZXh0XCI+SGVhbHRoeSwgdGFzdHkgYW5kIGhhc3NsZS1mcmVlIG1lYWxzIGFyZSB3YWl0aW5nIGZvciB5b3UuIFN0YXJ0IGVhdGluZyB3ZWxsIHRvZGF5LiBZb3UgY2FuIGNhbmNlbCBvciBwYXVzZSBhbnl0aW1lLiBBbmQgdGhlIGZpcnN0IG1lYWwgaXMgb24gdXMhPC9wPlxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiY3RhLWZvcm1cIiBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnVsbC1uYW1lXCI+RnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSm9obiBTbWl0aFwiICB0eXBlPVwidGV4dFwiIG5hbWU9XCJmdWxsLW5hbWVcIiBpZD1cImZ1bGwtbmFtZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwibWVAZXhhbXBsZS5jb21cIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZWxlY3Qtd2hlcmVcIj5XaGVyZSBkaWQgeW91IGhlYXIgZnJvbSB1cz88L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIG5hbWU9XCJzZWxlY3Qtd2hlcmVcIiBpZD1cInNlbGVjdC13aGVyZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5QbGVhc2UgY2hvb3NlIG9uZSBvcHRpb246PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZyaWVuZHNcIj5GcmllbmRzIGFuZCBmYW1pbHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieW91dHViZVwiPllvdVR1YmUgdmlkZW88L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9kY2FzdFwiPlBvZGNhc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFjZWJvb2tcIj5GYWNlYm9vayBhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2RpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0tZm9ybVwiPlNpZ24gdXAgbm93PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN0YS1pbWctYm94XCIgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJXb21hbiBlbmpveWluZyBmb29kIFwiPlxuICAgICAgICAgIDwhLS0gPGltZyBjbGFzcz1cImN0YS1pbWdcIiBzcmM9XCIuL2ltZy9lYXRpbmcuanBnXCIgYWx0PVwiXCI+IC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+YDtcblxuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBpbXBvcnQgSGVyb0ltZyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9oZXJvLnBuZ1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgbG9hZEhvbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxtYWluPlxuICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24taGVyb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJoZXJvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVyby10ZXh0LWJveFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nLXByaW1hcnlcIj5cbiAgICAgICAgICBBIGhlYWx0aHkgbWVhbCBkZWxpdmVyZWQgdG8geW91ciBkb29yLCBldmVyeSBzaW5nbGUgZGF5XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVyby1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIFRoZSBzbWFydCAzNjUtZGF5cy1wZXIteWVhciBmb29kIHN1YnNjcmlwdGlvbiB0aGF0IHdpbGwgbWFrZSB5b3VcbiAgICAgICAgICBlYXQgaGVhbHRoeSBhZ2Fpbi4gVGFpbG9yZWQgdG8geW91ciBwZXJzb25hbCB0YXN0ZXMgYW5kXG4gICAgICAgICAgbnV0cml0aW9uYWwgbmVlZHMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLS1mdWxsIG1hcmdpbi1yaWdodC1zbVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICA+U3RhcnQgZWF0aW5nIHdlbGw8L2FcbiAgICAgICAgPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tLW91dGxpbmVcIiBocmVmPVwiI1wiPkxlYXJuIG1vcmUgJmRhcnI7PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaXZlcmVkLW1lYWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGl2ZXJlZC1pbWdzXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY3VzdG9tZXJzL2N1c3RvbWVyLTEuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiY3VzdG9tZXIgcGhvdG9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9jdXN0b21lcnMvY3VzdG9tZXItMi5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJjdXN0b21lciBwaG90b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9jdXN0b21lci0zLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImN1c3RvbWVyIHBob3RvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY3VzdG9tZXJzL2N1c3RvbWVyLTQuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiY3VzdG9tZXIgcGhvdG9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9jdXN0b21lcnMvY3VzdG9tZXItNS5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJjdXN0b21lciBwaG90b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9jdXN0b21lci02LmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImN1c3RvbWVyIHBob3RvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZWxpdmVyZWQtdGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+MjUwLDAwMCs8L3NwYW4+IG1lYWxzIGRlbGl2ZXJlZCBsYXN0IHllYXIhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwiaGVyby1pbWdcIlxuICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2hlcm8ucG5nXCJcbiAgICAgICAgYWx0PVwiV29tYW4gZW5qb3lpbmcgZm9vZFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1mZWF0dXJlZC1pblwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmVhdHVyZWQtaW5cIj5cbiAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctZmVhdHVyZWQtaW5cIj5BcyBmZWF0dXJlZCBpbjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb3NcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImZlYXR1cmVkLWluLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbG9nb3MvdGVjaGNydW5jaC5wbmdcIiBhbHQ9XCJDb21wYW55IGxvZ29cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImZlYXR1cmVkLWluLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbG9nb3MvYnVzaW5lc3MtaW5zaWRlci5wbmdcIiBhbHQ9XCJDb21wYW55IGxvZ29cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImZlYXR1cmVkLWluLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbG9nb3MvdGhlLW5ldy15b3JrLXRpbWVzLnBuZ1wiIGFsdD1cIkNvbXBhbnkgbG9nb1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZmVhdHVyZWQtaW4taW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9sb2dvcy9mb3JiZXMucG5nXCIgYWx0PVwiQ29tcGFueSBsb2dvXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJmZWF0dXJlZC1pbi1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2xvZ29zL3VzYS10b2RheS5wbmdcIiBhbHQ9XCJDb21wYW55IGxvZ29cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1ob3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaG93IGNvbnRhaW5lciBncmlkIGdyaWQtLTItY29sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImhvdy1oZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+SE9XIElUIFdPUktTPC9zcGFuPlxuICAgICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nLXNlY29uZGFyeVwiPllvdXIgZGFpbHkgZG9zZSBvZiBoZWFsdGggaW4gMyBzaW1wbGUgc3RlcHM8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0LWJveFwiPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXAtbnVtYmVyXCI+MDE8L3A+XG4gICAgICAgIDxoMyBjbGFzcz1cImhlYWRpbmctdGVydGlhcnlcIj5UZWxsIHVzIHdoYXQgeW91IGxpa2UgKGFuZCB3aGF0IG5vdCk8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXAtZGVzY3JpcHRpb25cIj5OZXZlciBhZ2FpbiB3YXN0ZSB0aW1lIHRoaW5raW5nIGFib3V0IHdoYXQgdG8gZWF0ISBPbW5pZm9vZCBBSSB3aWxsIGNyZWF0ZSBhIDEwMCUgcGVyc29uYWxpemVkIHdlZWtseSBtZWFsIHBsYW4ganVzdCBmb3IgeW91LiBJdCBtYWtlcyBzdXJlIHlvdSBnZXQgYWxsIHRoZSBudXRyaWVudHMgYW5kIHZpdGFtaW5zIHlvdSBuZWVkLCBubyBtYXR0ZXIgd2hhdCBkaWV0IHlvdSBmb2xsb3chPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcC1pbWctYm94XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJzdGVwLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvYXBwL2FwcC1zY3JlZW4tMS5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcC1pbWctYm94XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJzdGVwLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvYXBwL2FwcC1zY3JlZW4tMi5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN0ZXAtdGV4dC1ib3hcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGVwLW51bWJlclwiPjAyPC9wPlxuICAgICAgICA8aDMgY2xhc3M9XCJoZWFkaW5nLXRlcnRpYXJ5XCI+QXBwcm92ZSB5b3VyIHdlZWtseSBtZWFsIHBsYW48L2gzPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXAtZGVzY3JpcHRpb25cIj5PbmNlIHBlciB3ZWVrLCBhcHByb3ZlIHRoZSBtZWFsIHBsYW4gZ2VuZXJhdGVkIGZvciB5b3UgYnkgT21uaWZvb2QgQUkuIFlvdSBjYW4gY2hhbmdlIGluZ3JlZGllbnRzLCBzd2FwIGVudGlyZSBtZWFscywgb3IgZXZlbiBhZGQgeW91ciBvd24gcmVjaXBlcy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0LWJveFwiPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXAtbnVtYmVyXCI+MDM8L3A+XG4gICAgICAgIDxoMyBjbGFzcz1cImhlYWRpbmctdGVydGlhcnlcIj5SZWNlaXZlIG1lYWxzIGF0IGNvbnZlbmllbnQgdGltZTwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwic3RlcC1kZXNjcmlwdGlvblwiPkJlc3QgY2hlZnMgaW4gdG93biB3aWxsIGNvb2sgeW91ciBzZWxlY3RlZCBtZWFsIGV2ZXJ5IGRheSwgYW5kIHdlIHdpbGwgZGVsaXZlciBpdCB0byB5b3VyIGRvb3Igd2hlbmV2ZXIgd29ya3MgYmVzdCBmb3IgeW91LiBZb3UgY2FuIGNoYW5nZSBkZWxpdmVyeSBzY2hlZHVsZSBhbmQgYWRkcmVzcyBkYWlseSE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLWltZy1ib3hcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInN0ZXAtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hcHAvYXBwLXNjcmVlbi0zLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbjwvbWFpbj4gXG5gO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGxvYWRNZW51ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBodG1sID0gYCAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1tZWFsc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbWVhbHMtaGVhZGVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj5NZWFsczwvc3Bhbj5cbiAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctc2Vjb25kYXJ5XCI+T21uaWZvb2QgQUkgY2hvb3NlcyBmcm9tIDUsMDAwKyByZWNpcGVzPC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1lYWxzIGdyaWQgZ3JpZC0tMy1jb2xzIG1hcmdpbi1ib3R0b20tbWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNhcmRcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cIm1lYWwtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9tZWFscy9tZWFsLTEuanBnXCIgYWx0PVwiRGlzaGVzIG9mIGphcGFuZXNlIGZvb2RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLXRhZ3NcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIHRhZy0tdmVnZXRhcmlhblwiPlZlZ2V0YXJpYW48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtZWFsLXRpdGxlXCI+SmFwYW5lc2UgR3lvemFzPC9wPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lYWwtYXR0cmlidXRlcyBsaXN0XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJmbGFtZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz42NTA8L3N0cm9uZz4gY2Fsb3JpZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwicmVzdGF1cmFudC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+TnV0cmlTY29yZSDCriA8c3Ryb25nPjc0PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cInN0YXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+NC45PC9zdHJvbmc+IHJhdGluZyAoNTM3KTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jYXJkXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJtZWFsLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbWVhbHMvbWVhbC0yLmpwZ1wiIGFsdD1cIkRpc2hlcyBvZiBqYXBhbmVzZSBmb29kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC10YWdzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctLXZlZ2FuXCI+VmVnYW48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctLXBhbGVvXCI+UGFsZW88L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtZWFsLXRpdGxlXCI+QXZvY2FkbyBTYWxhZDwvcD5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZWFsLWF0dHJpYnV0ZXMgbGlzdFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiZmxhbWUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+NDAwIDwvc3Ryb25nPiBjYWxvcmllczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJyZXN0YXVyYW50LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8c3Bhbj5OdXRyaVNjb3JlIMKuIDxzdHJvbmc+OTI8L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwic3Rhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz40LjggPC9zdHJvbmc+IHJhdGluZyAoNDQxKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaWV0cyBcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGluZy10ZXJ0aWFyeVwiPldvcmtzIHdpdGggYW55IGRpZXQ6PC9oMz5cblxuICAgICAgICA8dWwgY2xhc3M9XCJkaWV0cy1saXN0IGxpc3RcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5WZWdldGFyaWFuPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+VmVnYW48L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5QZXNjYXRhcmlhbjwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPkdsdXRlbi1mcmVlPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+TGFjdG9zZS1mcmVlPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+S2V0bzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPlBhbGVvPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+TG93IEZPRE1BUDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPktpZC1mcmllbmRseTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBhbGwtcmVjaXBlc1wiPlxuICAgICAgPGEgY2xhc3M9XCJsaW5rXCIgaHJlZj1cIiNcIj5TZWUgYWxsIHJlY2lwZXMgJnJhcnI7PC9hPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi10ZXN0aW1vbmlhbHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVzdGltb25pYWxzLWNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+VGVzdGltb25pYWxzPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1zZWNvbmRhcnlcIj5PbmNlIHlvdSB0cnkgaXQsIHlvdSBjYW4ndCBnbyBiYWNrPC9oMj5cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbHMgXCI+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJ0ZXN0aW1vbmlhbFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0ZXN0aW1vbmlhbC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9kYXZlLmpwZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwidGVzdGltb25pYWwtdGV4dFwiPkluZXhwZW5zaXZlLCBoZWFsdGh5IGFuZCBncmVhdC10YXN0aW5nIG1lYWxzLCB3aXRob3V0IGV2ZW4gaGF2aW5nIHRvIG9yZGVyIG1hbnVhbGx5ISBJdCBmZWVscyB0cnVseSBtYWdpY2FsLjwvYmxvY2txdW90ZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlc3RpbW9uaWFsLW5hbWVcIj7igJQgRGF2ZSBCcnlzb248L3NwYW4+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8ZmlndXJlIGNsYXNzPVwidGVzdGltb25pYWxcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwidGVzdGltb25pYWwtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9jdXN0b21lcnMvYmVuLmpwZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwidGVzdGltb25pYWwtdGV4dFwiPlRoZSBBSSBhbGdvcml0aG0gaXMgY3JhenkgZ29vZCwgaXQgY2hvb3NlcyB0aGUgcmlnaHQgbWVhbHMgZm9yIG1lIGV2ZXJ5IHRpbWUuIEl0J3MgYW1hemluZyBub3QgdG8gd29ycnkgYWJvdXQgZm9vZCBhbnltb3JlITwvYmxvY2txdW90ZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlc3RpbW9uaWFsLW5hbWVcIj7igJQgQmVuIEhhZGxleTwvc3Bhbj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJ0ZXN0aW1vbmlhbFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0ZXN0aW1vbmlhbC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9zdGV2ZS5qcGdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cInRlc3RpbW9uaWFsLXRleHRcIj5PbW5pZm9vZCBpcyBhIGxpZmUgc2F2ZXIhIEkganVzdCBzdGFydGVkIGEgY29tcGFueSwgc28gdGhlcmUncyBubyB0aW1lIGZvciBjb29raW5nLiBJIGNvdWxkbid0IGxpdmUgd2l0aG91dCBteSBkYWlseSBtZWFscyBub3chPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVzdGltb25pYWwtbmFtZVwiPuKAlCBTdGV2ZSBNaWxsZXI8L3NwYW4+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8ZmlndXJlIGNsYXNzPVwidGVzdGltb25pYWxcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwidGVzdGltb25pYWwtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9jdXN0b21lcnMvaGFubmFoLmpwZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwidGVzdGltb25pYWwtdGV4dFwiPkkgZ290IE9tbmlmb29kIGZvciB0aGUgd2hvbGUgZmFtaWx5LCBhbmQgaXQgZnJlZXMgdXAgc28gbXVjaCB0aW1lISBQbHVzLCBldmVyeXRoaW5nIGlzIG9yZ2FuaWMgYW5kIHZlZ2FuIGFuZCB3aXRob3V0IHBsYXN0aWMuPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVzdGltb25pYWwtbmFtZVwiPuKAlCBIYW5uYWggU21pdGg8L3NwYW4+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdhbGxlcnkgXCI+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS0xLmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS0yLmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS0zLmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS00LmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS01LmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS02LmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS03LmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS04LmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS05LmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS0xMC5qcGdcIiBhbHQ9XCJwaG90byBvZiBmb29kXCI+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8ZmlndXJlIGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImltZy1nYWxsZXJ5XCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2dhbGxlcnktMTEuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTEyLmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5gO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3RzIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXYtbGlzdFwiKTtcblxubG9hZEhvbWUoKTtcbm5hdkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lLWJ0blwiKSkgbG9hZEhvbWUoKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1lYWxzLWJ0blwiKSkgbG9hZE1lbnUoKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByaWNpbmctYnRuXCIpKSBsb2FkQ29udGFjdHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9