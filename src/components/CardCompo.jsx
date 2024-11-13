import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function CardCompo({ user }) {

  const nav = useNavigate();

  return (
    <Card className="mt-6 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <Typography>{user.username}</Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {user.email}
        </Typography>

      </CardBody>
      <CardFooter className="pt-0">

      </CardFooter>
    </Card>
  );
}