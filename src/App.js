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

//1. nambahin tip (click to copy) pas cursor ngehover discord
//2. nambahin tip (copied) pas cursor ngeclick discord
//3. animasi berhenti pas cursor ngehover ke salah satu link
//4. ngebenerin tampilan di mobile
//5. kapan harus pake synchronous/asynchronous(?)
//6. bikin bgchanges lebih singkat/simpel(?)
//7. routing ke page lain(?)
//8. bikin footer buat nambahin source art (yoneyama)
//9. ganti dari img ke background