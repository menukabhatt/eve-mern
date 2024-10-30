import { useParams } from "react-router"
import { useApiHooks } from "../hooks/apiHooks";
import { ListCompo } from "../components/ListCompo";

const ItemList = () => {
  const { label } = useParams();



  const [data, load] = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', {
    c: label
  });



  return (
    <div className="p-4">



      {data && data.meals.map((meal) => {
        // console.log(meal);
        return <ListCompo key={meal.idMeal} title={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal} />;
      })}





    </div>
  )
}
export default ItemList