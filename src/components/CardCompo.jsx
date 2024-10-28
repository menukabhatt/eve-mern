import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function CardCompo({ image, label, detail }) {

  const nav = useNavigate();

  return (
    <Card className="mt-6 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          className="w-full"
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {label}
        </Typography>
        <p className="line-clamp-3">
          {detail}
        </p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => nav(`/category-items/${label}`)}>Read More</Button>
      </CardFooter>
    </Card>
  );
}