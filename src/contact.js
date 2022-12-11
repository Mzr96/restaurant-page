"use strict";

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

export default loadContact;
