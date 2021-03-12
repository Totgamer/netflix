import './App.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/navigation/NavBar.jsx';
import Home from './components/navigation/Home.jsx';
import Series from './components/navigation/Series.jsx';
import Films from './components/navigation/Films.jsx';
import MyList from './components/navigation/MyList.jsx';
import NewAndPopulair from './components/navigation/NewAndPopulair.jsx';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App-content">
          <NavBar />
          <Route path='/' component={Home} exact />
          <Route path='/series' component={Series} />
          <Route path='/films' component={Films} />
          <Route path='/newandpopulair' component={NewAndPopulair} />
          <Route path='/mylist' component={MyList} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
