import React from "react";
import user1 from '../assets/man-reviewer1.jpg';
import user2 from '../assets/woman-reviewer1.jpg';
import user3 from '../assets/woman-reviewer2.jpg';
import user4 from '../assets/man-reviewer2.jpg';

export const Reviews = () => {
    return(
        <section id="reviews">
      <h2>Testimonials</h2>
      <div className="reviews grid">
        <article>
          <img src={user4} alt=""/>
          <h3>Jason Nguyen</h3>
          <h3>Jason Nguyen</h3>
          <p>Super fresh delicious food.</p>
        </article>
        <article>
          <img src={user2} alt=""/>
          <h3>Olivia Rose</h3>
          <p>Fantastic knowledgable service.</p>
        </article>
        <article>
          <img src={user1} alt=""/>
          <h3>Michael Smith</h3>
          <p>Food is packed with flavours but light and healthy.</p>
        </article>
        <article>
          <img src={user3} alt=""/>
          <h3>Desiree Parker</h3>
          <p>The employees provide quick and efficient service.</p>
        </article>
      </div>
    </section>
    )
}

export default Reviews;