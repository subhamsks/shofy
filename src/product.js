import React from 'react'
import Productdetail from './productdetail'
import {AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart, AiOutlineCloseCircle} from 'react-icons/ai';
import './product.css'
import { useAuth0 } from "@auth0/auth0-react";


const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
    
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x) => 
        {
            return x.Cat === product;
        })
        setProduct(update)
    }
    const AllProducts = () =>
    {
        setProduct(Productdetail)
    }
  return (
    <>
        {
            close ? 
            <div className="product_detail">
            <div className="container">
                <button className='closebtn' onClick={() => setClose(false)}><AiOutlineCloseCircle/></button>
                {
                    detail.map((curElm) => 
                    {
                        return(
                            <div className='productbox'>
                                <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.Cat}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                                    <h3>{curElm.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }                
            </div>
        </div> : null
        }
        

        <div className="products">
            <h2> # Products</h2>
            <p>Home . Products</p>
            <div className="container">
                <div className="filter">
                    <div className="categories">
                    <h3>Categories</h3>
                        <ul>
                        <li onClick={() => AllProducts ()} >All Products</li>
                            <li onClick={() => filtterproduct("Tablet")} >Tablet</li>
                            <li onClick={() => filtterproduct("Smart Watch")}>Smart Watch</li>
                            <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                            <li onClick={() => filtterproduct("Camera")}>Camera</li>
                            <li onClick={() => filtterproduct("Gaming")}>Gaming</li>                            
                            <li onClick={() => filtterproduct("Electronics")}>Electronics</li>                            
                        </ul>
                    </div>
                </div>
                    <div className="productbox">
                        <div className="contant">
                            {
                                product.map((currElem) =>
                                {
                                    return(
                                        <>
                                            <div className="box" key={currElem.id}>
                                                <div className="img_box">
                                                    <img src={currElem.Img} alt={currElem.Title} onClick={() => view  (currElem)}></img>
                                                    <div className="icon">
                                                        {
                                                            isAuthenticated ?
                                                            <li onClick={() => addtocart (currElem)}><AiOutlineShoppingCart/></li>
                                                            :
                                                            <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart/></li>
                                                        }
                                                        
                                                        <li onClick={() => view  (currElem)}><AiOutlineEye/></li>
                                                        <li><AiOutlineHeart/></li>               
                                                    </div>
                                                </div>     
                                                <div className="detail">
                                                    <p>{currElem.Cat}</p>
                                                    <h3 onClick={() => view  (currElem)}>{currElem.Title}</h3>
                                                    <h4>$ {currElem.Price}</h4>
                                                </div>              
                                            </div>   
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default Product