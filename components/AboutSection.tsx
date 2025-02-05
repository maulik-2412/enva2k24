
import React from 'react';
import styles from '../styles/AboutSection.module.css';


const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        {/* About content goes here */}
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="styles.frame ">
            <div className="styles.gallery-container">
                <div className="styles.gallery-wrapper" id="galleryWrapper">
                    {/* <!-- Duplicate the gallery content for looping --> */}

                    <div className="styles.gallery-item"><img src="images\preview.jpeg" alt="Image 1"/></div>
                    <div className="styles.gallery-item"><img src="images\preview (1).jpeg" alt="Image 2"/></div>
                    <div className="styles.gallery-item"><img src="images\preview (2).jpeg" alt="Image 3"/></div>
                    {/* <!-- Add more images as needed --> */}
                    {/* <!-- Duplicate the gallery content for looping --> */}
                    <div className="styles.gallery-item"><img src="images\preview.jpeg" alt="Image 1"/></div>
                    <div className="styles.gallery-item"><img src="images\preview (1).jpeg" alt="Image 2"/></div>
                    <div className="styles.gallery-item"><img src="images\preview (2).jpeg" alt="Image 3"/></div>
                    {/* <!-- Add more images as needed --> */}
                </div>
            </div>
        </div>
    </section>
  );
};


export default AboutSection;