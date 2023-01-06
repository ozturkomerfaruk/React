import React from 'react'
import Item from './Item'

export default function Home(props) {
    return (
        props.items.map((item)=>{return <Item key={item.id} title={item.title}/>})
    );
} //end-Home
