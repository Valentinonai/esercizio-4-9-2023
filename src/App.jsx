import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent
        txt="Click"
        style={{
          color: "red",
          width: "200px",
          height: "50px",
          borderRadius: "25px",
          border: "1px solid black",
          margin: "20px 0",
          fontSize: "20px",
          cursor: "pointer",
        }}
      />
      <ImageComponent
        src="https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3072&q=80"
        alt="Natura"
        style={{
          width: "500px",
          height: "500px",
          objectFit: "contain",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export default App;
