import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
export const TableContainer = styled.table.attrs(props => ({
  className: `table-container`
}))``;
export const TableHeader = styled.thead``;
export const TableFooter = styled.tfoot``;
export const TableCell = styled.td``;
export const TableCellHeading = styled.th``;
export const TableRow = styled.tr``;
export const TableBody = styled.tbody``;
const Table = styled.div.attrs(({
  ratio
}) => ({
  className: `table ${ratio && ratio}`
}))``;
export default withIs(Table);