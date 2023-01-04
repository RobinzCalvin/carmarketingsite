// import logo from './logo.svg';
import { Footer } from "../layout/footer/footer";
import Header from "../layout/header/header";
import { Slide } from "../layout/main/slide";

// import './App.css';

function ContainerLayout() {
  return (
    // <div>
    //   <Header/>
    //   <Slide/>
    //   <Footer/>
    // </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Header />
          <Slide />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContainerLayout;
