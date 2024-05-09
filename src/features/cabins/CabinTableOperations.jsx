import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const filterOptions = [
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

const sortByOptions = [
  {
    value: "name-asc",
    label: "Sort by name (A-Z)",
  },
  {
    value: "name-desc",
    label: "Sort by name (Z-A)",
  },
  {
    value: "regularPrice-asc",
    label: "Sort by price (low first)",
  },
  {
    value: "regularPrice-desc",
    label: "Sort by price (high first)",
  },
  {
    value: "maxCapacity-asc",
    label: "Sort by capacity (low first)",
  },
  {
    value: "maxCapacity-desc",
    label: "Sort by capacity (high first)",
  },
];

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortByOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
