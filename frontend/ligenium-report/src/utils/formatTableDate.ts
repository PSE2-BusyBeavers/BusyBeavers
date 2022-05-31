import { GridValueGetterParams } from "@mui/x-data-grid";

export default (params: GridValueGetterParams) => params.value ? (params.value as Date).toLocaleString() : "";

