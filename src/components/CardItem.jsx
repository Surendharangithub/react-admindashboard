import { Card, Metric, Text, Flex, BadgeDelta } from "@tremor/react";

function CardItem() {
  return (
    <Card className=" w-xs" decoration="top" decorationColor="indigo">
      <Flex alignItems="center" justifyContent="between" className=" mb-4">
        <Text>Sales</Text>
        <BadgeDelta size="lg" deltaType="moderateIncrease">+12.5%</BadgeDelta>
      </Flex>
      <Metric>$ 34,743</Metric>
    </Card>
  );
}

export default CardItem;
