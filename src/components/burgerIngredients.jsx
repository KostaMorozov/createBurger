import React , {Component} from 'react'
import PropTypes from 'prop-types';
import * as consts from '../consts/consts';

class BurgerIngredients extends Component {

    render(){

        let ingredient = null;

        switch (this.props.type){
            case consts.BREAD_BOTTOM:
                ingredient = <div className='BreadBottom'></div>
                break;
            case consts.BREAD_TOP:
                ingredient = (<div className='BreadTop'>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>);
                break;
            case consts.MEAT:
                ingredient = <div className='Meat'></div>
                break;
            case consts.CHEESE:
                ingredient = <div className='Cheese'></div>
                break;
            case consts.SALAD:
                ingredient = <div className='Salad'></div>
                break;
            case consts.BACON:
                ingredient = <div className='Bacon'></div>
                break;
            default:
                ingredient=null;
        }
    
        return ingredient;
}
}

BurgerIngredients.propTypes={
    type:PropTypes.string.isRequired
}

export default BurgerIngredients;
