import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

const CustomPagination = styled(Pagination)({
  '& ul': {
    justifyContent: 'center',
  },
  '& button': {
    color: 'white',
    fontSize: 18,
  },
});

export default function BasicPagination({ count, onChange }) {
  const onChangeHandler = (event, page) => {
    onChange(page);
  };

  return (
    <Stack spacing={5}>
      <CustomPagination
        count={count}
        color="primary"
        defaultPage={1}
        onChange={onChangeHandler}
      />
    </Stack>
  );
}

// ! Dosn`t used
