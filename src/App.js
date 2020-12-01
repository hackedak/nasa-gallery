import ImgOfDay from "./ImgOfDay"

const App = ()=> {
  return (
    <div className="App">
      <div className="AppHeader">
        <h1>NASA</h1>
        <h2>Image of the Day</h2>
      </div>
      <div className="img-of-the-day">
        <ImgOfDay />
      </div>
    </div>
  );
}

export default App;
