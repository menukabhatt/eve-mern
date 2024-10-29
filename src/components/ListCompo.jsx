import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export function ListCompo({ title, image }) {
  return (
    <Card className="w-96 mb-2">
      <List>
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