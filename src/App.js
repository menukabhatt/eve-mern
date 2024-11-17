import { useCocktailCategoryQuery } from "./features/cocktail/cocktailApi"

const App = () => {

  const { isLoading, error, isError, data } = useCocktailCategoryQuery();
  console.log(data);



  return (
    <div>



    </div>
  )
}
export default App