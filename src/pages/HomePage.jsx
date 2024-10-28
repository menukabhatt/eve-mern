import { CardCompo } from "../components/CardCompo";
import { useApiHooks } from "../hooks/apiHooks";


const HomePage = () => {

  const data = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php');




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