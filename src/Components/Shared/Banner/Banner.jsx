import image1 from '../../../assets/resources/Rectangle 560.png'
const Banner = () => {
  return (
    <div className="">
        <div>
            <img src={image1} alt="Food banner" className="w-full object-cover" />
            <div>
                <h1>An Epicurean Adventure Awaits Reserve Your Table Today</h1>
                <p>Our menu is a celebration of flavors from around the world, crafted with care and creativity by our talented team of chefs. From savory appetizers to decadent desserts, each dish is a masterpiece</p>
                
            </div>
        </div>
    </div>
  )
}

export default Banner