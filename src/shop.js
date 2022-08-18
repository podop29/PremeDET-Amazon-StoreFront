import ShopCard from "./shopCard";
import {React, useState, useEffect} from 'react';



function Shop({items}){




    
    return(

        <div className="w-11/12 lg:w-8/12 mx-auto text-white bg-black
         text-opacity-100 sticky rounded-md sm:px-14 px-8 sm:py-4 flex flex-col opacity-95">

                <h1 className="text-center text-3xl">PremeDET Products</h1>
                <a href="/">
                    <h1 className="text-center text-xl border w-2/4 sm:w-1/4 mx-auto my-1
                    hover:bg-white hover:text-black duration-200 border-white">Back Home</h1>
                 </a>
                <div className="lg:grid lg:grid-cols-3">
                    {items.map((item)=>{
                        return(
                            <ShopCard
                                    key={item.asin}
                                    title={item.title}
                                    img={item.img_url}
                                    asin={item.asin}
                                    description={item.description}
                                    features={item.features}
                                    link={item.link}/>
                            
                        )
                    })}
                </div>  
        </div>

    )
}

export default Shop;
