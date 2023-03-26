import Uploader from "./components/uploader";

function App() {

  //Environment Variables Configured Message
  console.log(process.env.REACT_APP_ENV_STATUS);

  return (
    <div className="App">
      <Uploader />
    </div>
  );
}

export default App;