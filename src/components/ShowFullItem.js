import React, { Component } from 'react'

// export class ShowFullItem extends Component {
//     render() {
//         return (
//             <div onClick={() => this.props.onShowItem(this.props.item)} className='full-item'>
//                 <div >
//                     <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
//                     <h2>{this.props.item.title}</h2>
//                     <p>{this.props.item.desc}</p>
//                     <b>{this.props.item.price}$</b>
//                     <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ShowFullItem

export default function ShowFullItem({ onShowItem, item, onAdd }) {
    
    function onFullClick() {
        onShowItem(item)
    }
    function onAddClick(e) {
        e.stopPropagation()
        onAdd(item)
    }
    return (
        <div onClick={onFullClick} className='full-item'>
            <div >
                <img src={"./img/" + item.img} alt = {item.title} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className='add-to-cart' onClick={onAddClick}>+</div>
            </div>
        </div>
    )

}
