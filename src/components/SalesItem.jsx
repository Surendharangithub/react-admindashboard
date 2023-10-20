import { useState } from "react";
import {
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";


const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Card className=" max-w-full mx-auto">
        <Flex className=" lg:flex-row flex-col space-x-8 max-lg:space-y-4 max-lg:justify-center">
          <Title>Overview</Title>
          <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
            <TabList variant="solid">
              <Tab className=" text-gray-700"  icon={ChartPieIcon}>
                Chart
              </Tab>
              <Tab icon={ViewListIcon}>
                List
              </Tab>
            </TabList>
          </TabGroup>
        </Flex>
        <Text className=" mt-3">Profolio Value</Text>
        <Metric>$25,465</Metric>
        <Divider />
        <Bold>
          <Text className=" mt-4">Asset Allocation</Text>
        </Bold>
        <Text> 1 asset class - 5 Holdings</Text>
        {selectedIndex == 0 ? (
          <DonutChart
            showAnimation={false}
            className="mt-6"
            data={stocks}
            index="name"
            category="value"
            valueFormatter={dataFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        ) : (
          <>
          <Flex justifyContent="between" className=" mt-6">
                <Text><Bold>Stocks</Bold></Text>
                <Text><Bold>Since Transcation</Bold></Text>
          </Flex>
            <List className=" mt-2">
              {stocks.map((stock) => (
                <ListItem key={stock.city}>
                  <span>{stock.name}</span>
                  <span>{stock.value}</span>
                </ListItem>
              ))}
            </List>
          </>
        )}

        <Button variant="light" className=" mt-3 " icon={ArrowRightIcon} iconPosition="right">
          View more
        </Button>
      </Card>
    </>
  );
};

export default SalesItem;
