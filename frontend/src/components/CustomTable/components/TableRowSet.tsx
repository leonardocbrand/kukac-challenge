import { TableBody, TableCell, TableRow } from '@mui/material';

type Props = {
  dataList: Record<string, string | number>[]
  emptyRows: number
  page: number
  rowsPerPage: number
};

export default function TableRowSet({
  dataList,
  emptyRows,
  page,
  rowsPerPage,
}: Props) {
  const newDataList = dataList.map((e) => {
    const newE = { ...e };
    delete newE.id;
    delete newE.vehicleType;
    return newE;
  });

  return (
    <TableBody>
      {newDataList
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        ?.map((e, i) => (
          <TableRow key={ i }>
            {Object.values(e).map((el, index) => (
              <TableCell key={ index } align="left">
                {el}
              </TableCell>
            ))}
          </TableRow>
        ))}
      {emptyRows > 0 && (
        <TableRow
          style={ {
            height: 33 * emptyRows,
          } }
        >
          <TableCell colSpan={ 6 } />
        </TableRow>
      )}
    </TableBody>
  );
}
