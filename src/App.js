import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

class App extends Component{
  render(){
    return(
    	<div>
			<Header/>
			<Footer/>
			<Content/>
		</div>
    )
  }
}

export default App;
