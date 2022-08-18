import {useState} from 'react';


function ShopCard({title, img, asin, description, features,link}){

    const [open,setOpen] = useState(false)


    const shortDescription = (description) =>{
        const newString = (description.split(".")[0], description.split(".")[1])
        if(!newString) return description.slice(0,160)
        return newString.slice(0,160) || description
    }



    return(
        <div className="text-white bg-white sm:bg-black my-3 flex-col mx-auto w-56 rounded-md duration-100 text-center">
            <span className='hover:cursor-pointer relative' onClick={(()=> setOpen((open)=>!open))}>
                {!open ? 
                <>
                    <img className="h-48 hover:h-52 duration-300 mx-auto opacity rounded-t-md" src={img} />
                    <p className=" hover:underline duration-300 h-12 overflow-hidden w-auto bg-black">{title}</p>
                </>
                :
                <div className=' h-64 sm:w-64 bg-white p-4 rounded-lg relative' >
                    <p className="h-12 overflow-hidden w-auto bg-white  text-black font-semibold text-md 
                    border-b-2 border-black">{title}</p>
                    <p className='text-sm text-black mt-2 mb-auto'>{shortDescription(description)}</p>
                    <a href={link}>
                    <button className='bg-red-600 text-white p-1 rounded-sm hover:p-2 duration-300
                    absolute bottom-1 sm:bottom-5 left-1/4 w-1/2'>See on Amazon</button>
                    </a>


                </div>

                }
                
            </span>


        </div>

    )
}

export default ShopCard