import "./AboutPage.css";
import image from "../../assets/Images/AboutPageImage.png";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>About me</h1>
        <img src={image} alt="" />
        <div>
          <h2>Who am I?</h2>
          <p>
            I am Dušan Topić, a passionate and aspiring web developer with a
            deep-rooted love for creating in the digital realm. My journey into
            the world of development began as a curiosity, but it has evolved
            into a genuine career pursuit. I am driven by a relentless desire to
            expand my knowledge and skills, to learn and create, and to
            contribute to the ever-evolving web development landscape.
          </p>
          <h2>Education</h2>
          <p>
            I hold a Master's degree in tourism, with a specialization in
            organizing hunting tourism activities, obtained from the Faculty of
            Science and Mathematics at the University of Novi Sad in 2016.
            However, my true adventure in the world of development began when I
            enrolled in the Vivify Academy's web development program. During my
            time at Vivify Academy, I completed a series of courses, including a
            Beginner Programming Course, Basic Web Development Course, and an
            Advanced Web Development Course. This training has equipped me with
            a solid foundation in various programming languages and frameworks,
            such as JavaScript, HTML5, PHP OOP, CSS, SQL, MySQL, NODE.JS,
            MONGODB, and TYPESCRIPT. My dedication and hard work are reflected
            in my impressive grades and final exam scores.
          </p>
          <h2>Work expiriance</h2>
          <p>
            My professional journey includes a diverse range of experiences. I
            have worked as a security manager, responsible for risk assessments,
            technical protection systems, and client contracts. Additionally, I
            ventured into the world of sports journalism, serving as a part-time
            Formula 1 reporter, where I wrote articles for "Auto Republika"
            online magazine and "Vrele Gume." One of the most significant
            milestones in my career was my internship at EPAM Systems, where I
            had the opportunity to showcase my web development skills. During
            this internship, I built a full-stack movie app using technologies
            like Node.js, Express, MongoDB, Mongoose, React, Typescript, and
            various other tools and libraries.
          </p>
          <h2>Interests</h2>
          <p>
            Aside from my professional pursuits, I have a deep interest in web
            development frameworks such as Laravel, React, and Express. These
            technologies drive my passion for creating web applications. I also
            have a strong fascination with the ever-changing world of Formula 1,
            which inspired my writing during my journalism days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
