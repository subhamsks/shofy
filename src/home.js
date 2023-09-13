import React from 'react'
import {Link } from 'react-router-dom'
import {BsArrowRight, BsCurrencyDollar} from 'react-icons/bs';
import {FiTruck} from 'react-icons/fi';
import {CiPercent} from 'react-icons/ci';
import {BsHeadset} from 'react-icons/bs';
import {AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart, AiOutlineCloseCircle} from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'
import SliderHome from './SliderHome';

const Home = ({detail, view, close, setClose, addtocart}) => {
  
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
                                    <h3>${curElm.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }                
            </div>
        </div> : null
        }
        {/* <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>The Best Note Book Collection 2023</h2>
                    <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
                </div>
                <div className="img_box">
                  <img src="./img/slider-img.png" alt="slider-img" />
                </div>
            </div>
        </div> */}
        
            
        <section className='home'>
          <div className='container d_flex'>
            <SliderHome />
          </div>
        </section>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="img_box">
                <img src="./img/Mobile Phone.png" alt="mobile" />
              </div>
              <div className="detail">
                <p>23 Products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="./img/smart watch.png" alt="smart watch" />
              </div>
              <div className="detail">
                <p>18 Products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="./img/headphone.png" alt="headphone" />
              </div>
              <div className="detail">
                <p>52 Products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="./img/tp6.png" alt="cpu" />
              </div>
              <div className="detail">
                <p>63 Products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FiTruck/>
              </div>
              <div className="detail">
                <h3>Free Shipping</h3>
                <p>Order above $1000</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <BsCurrencyDollar/>
              </div>
              <div className="detail">
                <h3>Return & Refund</h3>
                <p>Money Back Guarantee</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <CiPercent/>
              </div>
              <div className="detail">
                <h3>Member Discount</h3>
                <p>On Every Order</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <BsHeadset/>
              </div>
              <div className="detail">
                <h3>Customer Support</h3>
                <p>24hrs Call Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="product">
          <h2>Top Selling Products</h2>
          <div className="container">
          {
            Homeproduct.map((currElem) =>
            {
              return(                
                <div className="box" key={currElem.id}>
                  <div className="img_box">
                    <img src={currElem.Img} alt={currElem.Title} onClick={() => view  (currElem)}></img>
                    <div className="icon">
                      <li onClick={() => addtocart (currElem)}><AiOutlineShoppingCart/></li>
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
              )
            })
          }          
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="detail">
              <h4>LATEST TECHNOLOGY ADDED</h4>
              <h3>Apple iPad 10.2 11th Gen - 2023</h3>
              <p>$ 999 </p>
              <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
            </div>
            <div className="img_box">
              <img src="./img/slider-img.png" alt=""></img>
            </div>
          </div>
        </div>

    </>
  )
}

export default Home