"use strict";
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

export default loadHome;
