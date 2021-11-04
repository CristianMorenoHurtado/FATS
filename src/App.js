import About from './components/About';
import Footer from './components/Footer';
import Form from './components/Form';
import Landing from './components/Landing';
import Location from './components/Location';
import Nav from './components/Nav';
import Plans from './components/Plans';
import Schedule from './components/Schedule';
import './index.css';

function App() {
  /*function contact(e){
    e.preventDefault()
    const loading = document.querySelector(' .spinner')
    const success = document.querySelector(' .thank__you--sent')
    loading.classList += ' overlay--visible'

    
    .sendForm(
      '',
      '',
      e.target,
      ''
    ).then(() => {
      loading.classList.remove('overlay--visible')
      success.classList += ' overlay--visible'
    }).catch(() =>{
      loading.classList.remove('overlay--visible')
      alert('The email service is temporarily unavailable. Please contact me directly on info@forgedathletetrainingsystems.com')
    })

  }*/

  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Plans />
      <Schedule />
      <Location />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
