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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            numquam excepturi nulla natus ad harum error? Laborum, quod
            recusandae! Officia sint eaque iure velit. Delectus minus vero,
            asperiores iusto laudantium odit repellat, quis vitae corporis
            molestias unde, provident autem? Impedit ab eveniet repellat
            reiciendis necessitatibus autem provident non officia cumque?
          </p>
          <h2>Education</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quis
            eius alias aperiam impedit mollitia quasi quos id recusandae sed
            obcaecati laudantium nobis blanditiis omnis maiores, vero in! Saepe
            ut libero cum similique molestiae facere laboriosam minus qui, enim
            maxime voluptate quasi quo dicta atque adipisci perferendis
            voluptatem. Reiciendis, doloremque.
          </p>
          <h2>Work expiriance</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            molestias dolores cumque adipisci suscipit ea, ipsum repudiandae est
            enim. Necessitatibus aspernatur quaerat, ad odio exercitationem, et
            sed eveniet similique ipsam expedita tenetur! Accusantium deleniti
            esse consequuntur vel odit tempore et deserunt aspernatur, odio
            voluptatum facere, corporis nam repellendus? Quas, corporis?
          </p>
          <h2>Interests</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            eveniet maxime. Nihil eligendi similique expedita facere ab mollitia
            voluptates sint. Aut facere, quo animi possimus suscipit quas
            numquam, quae ratione modi tenetur fuga hic voluptatem dolorum
            molestiae? Unde, voluptatibus rem. Molestiae, incidunt optio!
            Reiciendis, perferendis molestiae quas minima cum labore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
