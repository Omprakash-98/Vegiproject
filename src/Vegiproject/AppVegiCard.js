import React from 'react'

export default function AppVegiCard({items,addtoCart}) {
    const{img,title,price}=items
    // const addCart = (index) => {

        // console.log("appveggi",items);

    // }

    return (
        <>
            <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival" >
                    <div className="single-new-arrival-bg">
                        <img src={img} alt="new-arrivals images" />
                        <div className="single-new-arrival-bg-overlay"></div>

                        <div className="new-arrival-cart">
                          
                            <p style={{cursor:"pointer"}} onClick={() => addtoCart(items)} >
                        <span className="lnr lnr-cart" > </span>
                         </p>
                            <p className="arrival-review pull-right">
                                <span className="lnr lnr-heart"></span>
                                <span className="lnr lnr-frame-expand"></span>
                            </p>
                        </div>
                    </div>
                    <h4><a href="#">{title}</a></h4>
                    <p className="arrival-product-price">{price}
                    </p>
                    {/* <div><button onClick={() => addtoCart(items)} className='btn btn-small'> <span className="lnr lnr-cart"   ></span> add <span>to </span> cart</button></div> */}
                </div>
            </div>


        </>
    )
}
