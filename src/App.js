import { Button, Input } from "@material-tailwind/react";
import { useLazySearchCocktailQuery, } from "./features/cocktail/cocktailApi";
import { useFormik } from "formik";
import { ListCompo } from "./ui/ListCompo";
import { useGetProductsQuery } from "./features/products/productApi";


const App = () => {


  const [getData, { isLoading, isFetching, error,
    data, isError }] = useLazySearchCocktailQuery();

  const { isLoading: isLoad, data: d, } = useGetProductsQuery();


  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      getData(val.search);
      resetForm();
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

      {data && data?.drinks && <ListCompo drinks={data?.drinks} />}


    </div>
  )
}
export default App