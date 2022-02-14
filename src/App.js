import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Welcome, User!</h1>
      </div>
      <div className='topnav'>
        <a href='#home' className='active'>Home</a>
        <a href='#cart'>Orders</a>
        <a href='#history'>History</a>
      </div>
      <div>
        <input type="text"></input>
      </div>
    </>
  );
}

export default App;
