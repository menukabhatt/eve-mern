import axios from "axios";
import { useEffect, useState } from "react"
import { ListCard } from "../components/ListCard";
import { CardCompo } from "../components/CardCompo";

const HomePage = () => {

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const [data, setData] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      console.log(err);
      setErr(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);



  if (load) {
    return <h1>Loading......</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }

  console.log(data);

  return (
    <div>





      {data && data.categories.map(({ strCategory, idCategory }, i) => {

        return <CardCompo key={idCategory} strCategory={strCategory} />

      })}









    </div>
  )
}
export default HomePage