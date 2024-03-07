import Arrow from "../../components/Arrow/Arrow";
import ArrowBright from "../../components/ArrowBright/ArrowBright";
import ArrowBright2 from "../../components/ArrowBright2/ArrowBright2";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <section className="hero_section" id="hero">
        <h1>
          <span>project </span>Lorum
        </h1>
        <div className="hero_img">
          <div className="btn">
            <Link>view project</Link>
            <Arrow />
          </div>
        </div>
      </section>
      <section className="about_section">
        <div className="about_img">
          <div className="about_img_left">
            <img src="/img/about1.png" alt="" />
            <img src="/img/about2.jpg" alt="" />
          </div>
          <img className="right_img" src="/img/about3.jpg" alt="" />
        </div>
        <article className="about_content">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="btn">
            <Link>read more</Link>
            <Arrow />
          </div>
        </article>
      </section>
      <section className="focus_section">
        <h2>Main Focus/Mission Statement</h2>
        <article>
          <div>
            <p className="big_numb">1</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div>
            <p className="big_numb">2</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </article>
      </section>
      <section className="projects_section">
        <h2>Our Projects</h2>
        <div className="projects_img">
          <div className="projects_img_wrapper">
            <div className="project_animation">
              <div className="upper_img"> </div>
              <div className="img_slide">
                <h3>Sample Project</h3>
                <div>
                  <p>view more</p> <ArrowBright2 />
                </div>
              </div>
              <img src="/img/projects1.jpg" alt="" />
            </div>
            <div className="project_animation">
              <div className="upper_img"> </div>
              <div className="img_slide">
                <h3>Sample Project</h3>
                <div>
                  <p>view more</p> <ArrowBright2 />
                </div>
              </div>
              <img src="/img/projects2.jpg" alt="" />
            </div>
          </div>
          <div className="projects_img_wrapper">
            <div className="project_animation">
              <div className="upper_img"> </div>
              <div className="img_slide">
                <h3 className="smaller_h3">Sample Project</h3>
                <div>
                  <p>view more</p> <ArrowBright2 />
                </div>
              </div>
              <img src="/img/projects3.jpg" alt="" />
            </div>
            <div className="project_animation">
              <div className="upper_img"> </div>
              <div className="img_slide">
                <h3>Sample Project</h3>
                <div>
                  <p>view more</p> <ArrowBright2 />
                </div>
              </div>
              <img src="/img/projects4.jpg" alt="" />
            </div>
            <div className="project_animation">
              <div className="upper_img"> </div>
              <div className="img_slide">
                <h3>Sample Project</h3>
                <div>
                  <p>view more</p> <ArrowBright2 />
                </div>
              </div>
              <img src="/img/projects5.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="push_right">
          <div className="btn">
            <Link>read more</Link>
            <ArrowBright />
          </div>
        </div>
      </section>
      <section className="contact_section">
        <h2>Contact Us</h2>
        <article className="contact_wrapper">
          <form action="">
            <div className="form_wrapper">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone Number" />
              <input type="mail" placeholder="E-mail" />
              <input type="text" placeholder="Interested In" />
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="btn">
              <input type="submit" value="send email" />
              <ArrowBright />
            </div>
          </form>
          <img src="/img/contact.jpg" alt="" />
        </article>
      </section>
    </div>
  );
};

export default Home;
