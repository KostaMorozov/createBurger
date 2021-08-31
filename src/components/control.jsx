import React from 'react'
import * as consts from '../consts/consts';

export default function Control({type,onMoreIngredient,onLessIngredient,disabled}) {

    return (
        <div className='BuildControl'>
            <label>{type}</label>
            <button className='Less' disabled={disabled} onClick={onLessIngredient}>{consts.LESS}</button>
            <button className='More' onClick={onMoreIngredient}>{consts.MORE}</button>

            
        </div>
    )
}
