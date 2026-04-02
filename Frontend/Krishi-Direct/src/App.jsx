import "./App.css";

function App() {
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>

        <div className="content">
          <h1>Krishi Direct</h1>
          <p>
            Connecting farmers directly with buyers.
            Fair price. Transparent market. Better future for agriculture.
          </p>

          <div className="buttons">
            <button>Login</button>
            <button className="register">Register</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <h3>About Krishi Direct</h3>
        <p>Bla Bla Bla</p>
        <p className="copy">bla bla copy</p>
      </div>
    </>
  );
}

export default App;