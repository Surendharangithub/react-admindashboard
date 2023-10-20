import CardItem from "./CardItem";
import { Card, Title, AreaChart } from "@tremor/react";
import TableList from "./TableList";

function LeftColumn() {
  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 3690,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];
  const valueFormatter = (number) =>
    `$ ${new Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <div className=" w-full flex flex-col justify-between p-2">
      <div className=" flex flex-col gap-2 w-full lg:flex-row">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className=" flex-1 w-full mt-4">
        <Card>
          <Title>Website Revenue in (USD)</Title>
          <AreaChart
            className=" h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            colors={["indigo", "cyan"]}
            valueFormatter={valueFormatter}
          />
        </Card>
        <div className=" mt-4">
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default LeftColumn;
