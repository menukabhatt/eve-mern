import { useCocktailCategoryQuery } from "./features/cocktail/cocktailApi"
import { ListCompo } from "./ui/ListCompo";

const App = () => {

  const { isLoading, error, isError, data, isFetching } = useCocktailCategoryQuery();

  console.log(data);



  return (
    <div>

      {data && <ListCompo drinks={data.drinks} />}



    </div>
  )
}
export default App