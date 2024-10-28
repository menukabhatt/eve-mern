import { useParams } from "react-router"
import { useApiHooks } from "../hooks/apiHooks";

const ItemList = () => {
  const { label } = useParams();

  const data = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', {
    c: label
  });

  console.log(data);




  return (
    <div>





    </div>
  )
}
export default ItemList