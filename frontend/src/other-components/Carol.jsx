    
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './carol.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image10 from "../assets/10.jpg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";
// import image77 from "../assets/77.jpg";

const Carol = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000} >
        <img className="d-block w-100" src={image13} alt="First slide" />
        <Carousel.Caption className="carol-li">
          <h3>"Giving is not just about making a donation, it’s about making a difference."</h3>
          <p>🌍 Your small contribution can bring a big change in someone's life.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500} >
        <img className="d-block w-100" src={image14} alt="Second slide" />
        <Carousel.Caption className="carol-li">
      
          <h3>"No one has ever become poor by giving." – Anne Frank</h3>
          <p>        ❤️ Every act of kindness creates a ripple effect of hope and compassion..</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img className="d-block1 w-100 " src={image10} alt="Third slide" />
        <Carousel.Caption className="carol-li">
          <h3>"Alone we can do so little; together we can do so much." – Helen Keller</h3>
          <p>🤝 Join hands with us and be the reason someone smiles today!.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carol;
