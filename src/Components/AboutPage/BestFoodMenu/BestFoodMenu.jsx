import { recipes } from "../../../utils/recipes";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"

const BestFoodMenu = () => {
  const yummyMenu = recipes?.slice(0, 4);
  return (
    <div>
        <div>
            <SectionHeader subHeading="Best Food Menu" heading="Choose Your Best Menu&rsquo;s"/>
              {/* Menu Items */}
                    <div className="w-full flex flex-col gap-10">
                      {yummyMenu?.map((recipe, index) => (
                        <FoodCard
                          key={index}
                          name={recipe?.name}
                          image={recipe?.image}
                          price={recipe?.price}
                          recipe={recipe?.recipe}
                        />
                      ))}
                    </div>
        </div>
    </div>
  )
}

export default BestFoodMenu