import Footer from "./pageContent/Footer";
import Header from "./pageContent/Header";
import Navbar from "./pageContent/Navbar";
import PageContent from "./pageContent/PageContent";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <PageContent />
        <Footer />
    </div>
  );
}

export default App;
