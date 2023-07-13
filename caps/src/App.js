import logo from './logo.svg';
import './App.css';
import AllCollapseExample from './example';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from "./example"
import GroupExample from './frontend/listofcourse';
// import Nav from './nav';
import IndividualIntervalsExample from "./slidingImage"
import Navigation from "./nav";
function App() {
  return (
    <div className="App">
      {/* nav links */}
      {/* <GroupExample/> */}
      <Navigation/>
      {/* <CollapsibleExample/> */}
      <GroupExample/>

      <IndividualIntervalsExample/>
      <AllCollapseExample/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
