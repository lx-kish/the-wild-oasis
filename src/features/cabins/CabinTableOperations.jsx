import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "no-discount",
    label: "No discount",
  },
  {
    value: "with-discount",
    label: "With discount",
  },
];

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
    </TableOperations>
  );
}

export default CabinTableOperations;
