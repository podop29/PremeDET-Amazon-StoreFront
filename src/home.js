

function Home(){
    return(
      <>
    <div className='w-10/12 sm:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto top-1/4 border border-black text-white bg-black
        opacity-90 text-opacity-100 relative rounded-md sm:px-14 px-8 sm:py-8 flex flex-col'>
          <h1 className='text-center text-3xl text-opacity-100'>PremeDET</h1>
          <h2 className=' text-center mt-2 sm:mt-4'>PremeDET is a locally owned business operated out of Michigan.
             At PremeDET, it is our mission to provide customers with a pleasant online shopping experience.
              If you have any questions, comments, or concerns, don't hesitate to reach out and contact us.</h2>
              <a className="mx-auto w-3/5" href="/shop">
                <button className='w-full bg-white p-1 text-black my-4 '>Shop with us</button>
              </a>


            
        </div>
        <footer className='w-full  bg-black/60 fixed bottom-0'>
          <a href = "mailto:support@premedet.com">
            <h1 className="text-white text-center hover:underline hover:cursor-pointer">Contact Me</h1>
          </a>
        </footer>

        </>
    )
}


export default Home;
