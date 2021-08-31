import React from 'react'
import BurgerIngredients from './burgerIngredients'
import * as consts from '../consts/consts'

export default function Burger({ingredients}) {

    const transferIngredients = Object.keys(ingredients).map(ingredient=>{
        return [...Array(ingredients[ingredient])].map((_,i)=>{
            return <BurgerIngredients key={ingredient+i} type={ingredient}/>
        })}).reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
        console.log(transferIngredients);
    return (
        <div className='Burger'>
            <BurgerIngredients type={consts.BREAD_TOP}/>
            {transferIngredients.length === 0 ? <p><strong>Please Add Ingredients...</strong></p>:transferIngredients}
            <BurgerIngredients type={consts.BREAD_BOTTOM}/>
        </div>
    )
}
