const Button = ({ name }) => {
   return (
      <button className='block py-2 px-8 border border-dash border-pink-500 font-rubik rounded hover:bg-pink-300 hover:text-white uppercase duration-300 transition-all'>
         {name}
      </button>
   )
}

export default Button
