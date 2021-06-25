import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard'
import Navi from './layouts/Navi'
import { Container } from 'semantic-ui-react';
import $ from 'axios'; 

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main" >
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;

// $(document).ready(function(){
//   $('.special.cards .image').dimmer({
//     on: 'hover'
//   });
// });