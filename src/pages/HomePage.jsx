import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik } from "formik"
import * as Yup from 'yup';

const formSchema = Yup.object({
  username: Yup.string().min(5).max(16).required('Required'),
  email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
  // gender: '',
  // habits: [],
  // country: '',
  // message: ''
});



const HomePage = () => {
  const {
    values,
    errors,
    handleChange, handleSubmit, setFieldValue } = useFormik({
      initialValues: {
        username: '',
        email: '',
        gender: '',
        habits: [],
        country: '',
        message: ''
      },
      onSubmit: (val) => {
        console.log(val);

      },
      validationSchema: formSchema

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
        <p className="text-red-600">{errors.username}</p>
        <Input
          onChange={handleChange}
          label="Email"
          name="email"
          value={values.email}
        />

        <div>
          <Typography variant="h6">Select Your Gender</Typography>
          <Radio
            label='Male'
            onChange={handleChange}
            value={'Male'}
            name="gender"
          />
          <Radio
            label='Female'
            onChange={handleChange}
            value={'Female'}
            name="gender"
          />
        </div>
        <div>
          <Typography variant="h6">Select Your Habbits</Typography>
          <Checkbox
            label='Dance'
            onChange={handleChange}
            value={'Dance'}
            name="habits"
          />
          <Checkbox
            label='Sing'
            onChange={handleChange}
            value={'Sing'}
            name="habits"
          />
        </div>
        <div>


          <Select
            onChange={(e) => setFieldValue('country', e)}
            name='country'
            label="Select Your Country">
            <Option value="Nepal">Nepal</Option>
            <Option value="China">China</Option>
            <Option value="India">India</Option>
          </Select>
        </div>
        <div>
          <Textarea
            name="message"
            onChange={handleChange}
            value={values.message}
            label="type your message" />
        </div>

        <Button size="sm" type="submit">Submit</Button>

      </form>









    </div>
  )
}
export default HomePage