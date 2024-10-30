import { useParams } from "react-router";
import { useApiHooks } from "../hooks/apiHooks";

const DetailPage = () => {
  const { id } = useParams();
  const [data, load] = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php', {
    i: id
  });






  return (
    <div className="p-4">

      {data && data.meals.map((meal) => {

        return <div key={meal.idMeal} className="space-y-3">
          <iframe className="h-[300px] w-[400px]" src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`} frameborder="0" allowFullScreen></iframe>
          <p>{meal.strInstructions}</p>

        </div>

      })
      }
    </div>
  )
}
export default DetailPage