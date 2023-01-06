import React from 'react'

function Item(props) {
    return <div style={itemStyle}>{props.title}</div>
} //end-Item

const itemStyle = {
    width: '100%',
    backgroundColor: 'lightgray',
    padding: '5px',
    marginTop: '5px',
    fontWeight: 'bold',
    fontSize: '24px'
}

export default Item;
