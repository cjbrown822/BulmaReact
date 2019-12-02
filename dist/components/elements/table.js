import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import withDisplay from "../higherorder/displayhoc";
export const TableContainer = styled.div.attrs(props => ({
  className: `table-container`
}))``;
export const TableHeader = styled.thead``;
export const TableFooter = styled.tfoot``;
export const TableCell = styled.td``;
export const TableCellHeading = styled.th``;
export const TableRow = withDisplay(styled.tr``);
export const TableBody = styled.tbody``;
const Table = styled.table.attrs(({
  ratio
}) => ({
  className: `table ${ratio && ratio}`
}))``;
export default withIs(Table);