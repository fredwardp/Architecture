import "./Gallery.css";
const Gallery = () => {
  return (
    <main className="container">
      <h1>
        <span>Photo</span>Gallery
      </h1>
      <section className="photo_section">
        <div className="photo_wrapper">
          <img src="/img/photo1.png" alt="" />
          <img src="/img/photo2.png" alt="" />
          <img src="/img/photo3.png" alt="" />
          <img src="/img/photo4.png" alt="" />
          <img src="/img/photo5.png" alt="" />
        </div>
        <div className="photo_wrapper">
          <img src="/img/photo6.png" alt="" />
          <img src="/img/photo7.png" alt="" />
          <img src="/img/photo8.png" alt="" />
          <img src="/img/photo9.png" alt="" />
          <img src="/img/photo10.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Gallery;
