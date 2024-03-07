import { useContext, useEffect } from "react";
import "./Loadingscreen.css";
import { LoadingContext } from "../../context/context";
useContext;
const Loadingscreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  });

  let style = { width: "30vw", height: "30vw" };

  return (
    <main className="loading_wrapper">
      <dotlottie-player
        src="https://lottie.host/042e25f8-e68d-49f4-bd4a-acebc9a39b80/tokHVLKJ7t.json"
        background="transparent"
        speed="1"
        style={style}
        loop
        autoplay
      ></dotlottie-player>
      <h1>Loading..</h1>
    </main>
  );
};

export default Loadingscreen;
