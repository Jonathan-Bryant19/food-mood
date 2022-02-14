import '../App.css';
import Navbar from './Navbar';
import RestaurantList from './RestaurantList';
import Search from './Search'

function App() {
  return (
    <>
      <div>
        <h1>Welcome, User!</h1>
      </div>
      <Navbar />
      <Search />
      <hr></hr>
      <RestaurantList />
    </>
  );
}

export default App;
