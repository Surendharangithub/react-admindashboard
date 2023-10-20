import SalesItem from "./SalesItem";
import WebAnalytics from "./WebAnalytics";
import DataList from "./DataList"
function RightColumn() {
  return (
    <div className=" px-2 mt-2">
      <SalesItem />
      <WebAnalytics />
      <DataList />
    </div>
  );
}

export default RightColumn;
