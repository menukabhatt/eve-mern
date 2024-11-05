import { Button, Input } from "@material-tailwind/react"
import { useFormik } from "formik"

const HomePage = () => {
  const { values, handleChange, handleSubmit, } = useFormik({
    initialValues: {
      username: '',
      email: '',
    },
    onSubmit: (val) => {
      console.log(val);

    }

  });

  return (
    <div className="max-w-[250px] p-4">

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          onChange={handleChange}
          label="Username"
          name="username"
          value={values.username}
        />
        <Input
          onChange={handleChange}
          label="Email"
          name="email"
          value={values.email}
        />
        <Button size="sm" type="submit">Submit</Button>

      </form>









    </div>
  )
}
export default HomePage