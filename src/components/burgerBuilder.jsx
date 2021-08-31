import React, { Component } from 'react'
import Burger from './burger';
import ControlsBuilder from './controlsBuilder';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad :0,
            meat:0,
            bacon:0,
            cheese:0
        }
     }
     handleMoreIngredient = (type)=>{
         let ingredients = {...this.state.ingredients};
         ingredients[type]++;
         this.setState({ingredients});
     }
     handleLessIngredient = (type)=>{
        let ingredients = {...this.state.ingredients};
        if(!ingredients[type])
            return;
        ingredients[type]--;
        this.setState({ingredients});
    }
    render() { 
        const {ingredients}=this.state;
        const disabledIngredients = {...ingredients};
        for(let key in disabledIngredients)
            disabledIngredients[key] = disabledIngredients[key] <=0;
        return ( 
            <React.Fragment>
                <Burger ingredients={ingredients}/>
                <ControlsBuilder 
                onMoreIngredient={this.handleMoreIngredient} 
                onLessIngredient={this.handleLessIngredient} 
                disabled={disabledIngredients}/>
            </React.Fragment>
         );
    }
}
 
export default BurgerBuilder;