
const Cart = () => {
  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24 ">

      
      <h1 className='my-12 font-bold'>Cart Items</h1>
      <ul>
        <li>

          <div className="flex items-center justify-between mb-20">
            
            <div className="flex items-center">
              <img className='h-16' src="Images/Prescription Glasses/Aurora.jpg" alt="Aurora"></img>
              <span className='font-bold ml-4 w-48'>Aurora</span>
            </div>

            <div>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
              <b className="px-4">1</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
            </div>
            <span>$112.50</span>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>

          </div>
        </li>
      </ul>


      <ul>
        <li>

          <div className="flex items-center justify-between">
            
            <div className="flex items-center">
              <img className='h-16' src="Images/Prescription Glasses/Rose.jpg" alt="Rose"></img>
              <span className='font-bold ml-4 w-48'>Rose</span>
            </div>

            <div>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
              <b className="px-4">1</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
            </div>
            <span>$200.75</span>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>

          </div>
        </li>
      </ul>



    </div>
  )
}

export default Cart;