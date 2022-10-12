import './App.css';
import BackgroundChanges from './BackgroundChanges';
import HeaderText from './HeaderText';
import SocialLinks from './SocialLinks';

function App() {
  return (
    <div className="App">
      <div className='SocialLinks'>
        <SocialLinks></SocialLinks>
      </div>
      <div className="Box"></div>
      <div className="Background">
        <BackgroundChanges></BackgroundChanges>
      </div>
      <div className="Header">
        <HeaderText></HeaderText>
      </div>
    </div>
  );
}

export default App;

//what to do:
//nambahin tip (click to copy) pas cursor ngehover discord
//nambahin tip (copied) pas cursor ngeclick discord
//animasi berhenti pas cursor ngehover ke salah satu link
//ngebenerin tampilan di mobile
//kapan harus pake synchronous/asynchronous(?)