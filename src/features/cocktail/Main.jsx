import { ListCompo } from "../../ui/ListCompo";
import { useCocktailCategoryQuery } from "./cocktailApi";

const Main = () => {
  const { isLoading, error, isError, data, isFetching } = useCocktailCategoryQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }


  return (
    <div>

      {data && <ListCompo drinks={data.drinks} />}



    </div>
  )
}
export default Main