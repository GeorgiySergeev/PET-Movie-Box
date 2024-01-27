import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={5}>
      <Pagination count={10} shape="rounded" />
    </Stack>
  );
}
// ! Dosn`t used
