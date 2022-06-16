import { GridValueGetterParams } from '@mui/x-data-grid';
import dayjs from 'dayjs';

export default (params: GridValueGetterParams) =>
  params.value ? dayjs(params.value as Date).format('DD.MM.YYYY HH:mm') : '';
