// export const TableHead = ({columns}) => {
//     return (
//         <thead>
//             <tr>
//                 {columns.map(({lable, key}) => <th key={key}>{lable}</th>)}
//             </tr>
//         </thead>
//     )
// }

export const TableHead = ({ lable, keys, onClick}) => {
  return (
    <th key={keys} onClick={e => onClick(e, keys)}>
      {lable}
    </th>
  );
};
