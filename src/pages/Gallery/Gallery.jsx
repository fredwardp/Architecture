import "./Gallery.css";
const Gallery = () => {
  return (
    <main className="container">
      <h1>
        <span>Photo</span>Gallery
      </h1>
      <section className="photo_section">
        <div className="photo_wrapper">
          <img src="./public/img/photo1.png" alt="" />
          <img src="./public/img/photo2.png" alt="" />
          <img src="./public/img/photo3.png" alt="" />
          <img src="./public/img/photo4.png" alt="" />
          <img src="./public/img/photo5.png" alt="" />
        </div>
        <div className="photo_wrapper">
          <img src="./public/img/photo6.png" alt="" />
          <img src="./public/img/photo7.png" alt="" />
          <img src="./public/img/photo8.png" alt="" />
          <img src="./public/img/photo9.png" alt="" />
          <img src="./public/img/photo10.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Gallery;
