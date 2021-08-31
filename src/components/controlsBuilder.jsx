import React from 'react'
import Control from './control';

export default function ControlsBuilder({onMoreIngredient,onLessIngredient,disabled}) {
    const controls = [
        {label:'Salad',type:'salad'},
        {label:'Meat',type:'meat'},
        {label:'Cheese',type:'cheese'},
        {label:'Bacon',type:'bacon'}
    ]

    return (
        <div className='BuildControls'>
            {controls.map(control=>(
                <Control 
                key={control.label} 
                type={control.label} 
                onMoreIngredient={()=>onMoreIngredient(control.type)} 
                onLessIngredient={()=>onLessIngredient(control.type)}
                disabled={disabled[control.type]}/>
            ))}
        </div>
    )
}
