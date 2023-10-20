import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Athens",
    rating: "2 open PR",
  },
  {
    city: "Luzern",
    rating: "1 open PR",
  },
  {
    city: "Zürich",
    rating: "0 open PR",
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
];
export default function DataList() {
  return (
    <Card className=" max-w-full">
      <Title>Tremor's Hometowns</Title>
      <List>
        {cities.map((city) => (
          <ListItem key={city.city}>
            <span>{city.city}</span>
            <span>{city.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
