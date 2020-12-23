import React from 'react';
import './CardList.css';
import {Card} from './Card.js';

export const CardList= (props) =>{
    return(
<div className='cardlist'>
{
    props.monsters.map(monster=>(
    <Card key={monster.id} monster={monster}/>))
}
</div>
);
}



