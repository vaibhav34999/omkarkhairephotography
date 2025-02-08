import Footer from './layout/Footer';
import Header from './layout/Header';
import './omkarkhaire.scss';
import Routes from './routes/Routes';

function OmkarKhaire() {
  return (
    <div className="main-container">
      <Header/>
      <div className='content'>
        <Routes/>
      </div>
      <Footer/>
    </div>
  );
}

export default OmkarKhaire;
