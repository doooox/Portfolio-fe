import ReactLoading from "react-loading";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <h1>Loading</h1>
      <ReactLoading
        type="spinningBubbles"
        color="#fc9003"
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
};

export default LoadingComponent;
