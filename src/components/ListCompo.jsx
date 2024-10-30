import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function ListCompo({ title, image, id }) {
  const nav = useNavigate();

  return (
    <Card className="w-96 mb-2" >
      <List onClick={() => nav(`/detail/${id}`)} >
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src={image} />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              {title}
            </Typography>
            {/* <Typography variant="small" color="gray" className="font-normal">
              Software Engineer @ Material Tailwind
            </Typography> */}
          </div>
        </ListItem>

      </List>
    </Card>
  );
}