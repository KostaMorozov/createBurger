import React, { Component } from 'react'
import BurgerBuilder from './components/burgerBuilder'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <BurgerBuilder/>
            </React.Fragment>
         );
    }
}
 
export default App;