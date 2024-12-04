import handcook from '../../assets/resources/handcook.png'
const Banner = () => {
  return (
    <div className='flex justify-center items-center w-full border'>
      <div className='w-full h-[800px] overflow-hidden'>
        <img src={handcook} alt="Cooking prepare photo" />
      </div>
      <div className='w-full h-full bg-deep-black'>

      </div>
    </div>
  )
}

export default Banner