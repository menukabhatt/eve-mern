import { Button, Input } from "@material-tailwind/react";
import { useLazySearchCocktailQuery } from "./features/cocktail/cocktailApi";
import { useFormik } from "formik";


const App = () => {


  const [getData, { isLoading, isFetching, error,
    data, isError }] = useLazySearchCocktailQuery();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val) => {
      getData(val.search);
    }
  });

  return (
    <div>
      <div className="max-w-[300px] p-4 ">

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            label="Cocktail"
            name="search" onChange={handleChange} />
          <Button size="sm" type="submit" loading={isLoading}>Submit</Button>
        </form>



      </div>
    </div>
  )
}
export default App