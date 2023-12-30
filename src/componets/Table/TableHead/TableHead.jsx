import { useState } from "react";

export const TableHead = ({ columns, handleSorting }) => {
  const [sortFirld, setSortFirld] = useState("");
  const [order, setOrder] = useState("");
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortFirld && order === "asc" ? "desc" : "asc";
    setSortFirld(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ lable, key, sortable }) => {
          const cl = sortable
            ? sortFirld === key && order === "asc"
              ? "up"
              : sortFirld === key && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              onClick={sortable ? () => handleSortingChange(key) : null}
              key={key}
              className={cl}
            >
              {lable}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
