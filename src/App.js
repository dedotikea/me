import './App.css';
import BackgroundChanges from './BackgroundChanges';
import HeaderText from './HeaderText';

function App() {
  return (
    <div className="App">
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
