import Routes from "./Router";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
