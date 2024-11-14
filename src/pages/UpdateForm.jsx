import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { addUser } from "../redux/userSlice";
import { useNavigate, useParams } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

const formSchema = Yup.object({
  username: Yup.string().min(5).max(16).required('Required'),
  email: Yup.string().email().required(),
  gender: Yup.string().required(),
  habits: Yup.array().min(1).required(),
  country: Yup.string().required(),
  message: Yup.string().required()
});

const UpdateForm = () => {
  const nav = useNavigate();
  const { id } = useParams();

  console.log(id);

  const dispatch = useDispatch();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      habits: [],
      country: '',
      message: ''
    },
    onSubmit: (val) => {
      val.id = nanoid();
      dispatch(addUser(val));
      nav(-1);
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
        {errors.username && touched.username && <p className="text-red-600">{errors.username}</p>}
        <Input
          onChange={handleChange}
          label="Email"
          name="email"
          value={values.email}
        />
        {errors.email && touched.email && <p className="text-red-600">{errors.email}</p>}

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
        {errors.gender && touched.gender && <p className="text-red-600">{errors.gender}</p>}
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
        {errors.habits && touched.habits &&
          <p className="text-red-600">{errors.habits}</p>}
        <div>


          <Select
            onChange={(e) => setFieldValue('country', e)}
            name='country'
            label="Select Your Country">
            <Option value="Nepal">Nepal</Option>
            <Option value="China">China</Option>
            <Option value="India">India</Option>
          </Select>
          {errors.country && touched.country &&
            <p className="text-red-600">{errors.country}</p>}
        </div>
        <div>
          <Textarea
            name="message"
            onChange={handleChange}
            value={values.message}
            label="type your message" />
          {errors.message && touched.message &&
            <p className="text-red-600">{errors.message}</p>}
        </div>

        <Button size="sm" type="submit">Submit</Button>

      </form>









    </div>
  )
}
export default UpdateForm