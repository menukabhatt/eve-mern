import axios from "axios";
import { useEffect, useState } from "react"
import { CardCompo } from "../components/CardCompo";


const HomePage = () => {

  const [data, setData] = useState();

  const getData = async () => {
    try {

      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
    } catch (err) {

    }

  }


  useEffect(() => {
    getData();

  }, []);




  return (
    <div className="p-4 grid grid-cols-3 gap-5">

      {data && data.categories.map((cata) => {
        return <CardCompo
          key={cata.idCategory}
          image={cata.strCategoryThumb}
          label={cata.strCategory}
          detail={cata.strCategoryDescription}

        />;
      })}







    </div>
  )
}
export default HomePage