import './styles.css'

import { createRoot } from 'react-dom/client'
const root = createRoot(document.querySelector("#root"));

function productCard(key,img,title,price,desc)
{
    return  (
        <div className='card' key={key}> 
            <img src={img} />
            <h2>{title}</h2>
            <p> Rs. <span className='priceAmount' > {price}</span> </p>
            <p className='descri'>{desc}</p>
        </div>
    )
}


/* First Way Using Array */
// root.render(
//     [
//         productCard(1,"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png","Essence Mascara Lash Princess", 50 , "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."),
//         productCard(1,"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png","Essence Mascara Lash Princess", 50 , "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."),
//         productCard(1,"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png","Essence Mascara Lash Princess", 50 , "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.")
//     ]
// );


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    const cards = data.products.map((p)=>{
        return productCard(p.id, p.thumbnail, p.title, p.price , p.description)
    })

    root.render(cards);
});