import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar'
import people from './people'



const App = () => {
  return (
    people.map(v => <Avatar a={v.x} b={v.w} c={v.y} d={v.z}/>)
  );
}
export default App;
