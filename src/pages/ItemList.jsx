import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ItemList = () => {
  const { label } = useParams();

  const [data, setData] = useState();

  const getData = async () => {
    try {

      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: label
        }
      });
      setData(response.data);
    } catch (err) {

    }

  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>



    </div>
  )
}
export default ItemList