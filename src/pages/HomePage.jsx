import { CardCompo } from "../components/CardCompo";
import ListSkeleton from "../components/ListSkeleton";
import { useApiHooks } from "../hooks/apiHooks";


const HomePage = () => {


  // const persons = ['r', 'b'];
  // const [q,w] = persons;

  const [data, load] = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php');


  if (load) {
    return <ListSkeleton />
  }




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