import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

// Создаем стилизованный компонент с помощью styled
const CustomPagination = styled(Pagination)({
  // background: 'red',
  '& ul': {
    justifyContent: 'center',
  },
});

export default function BasicPagination({ count, onChange }) {
  const onChangeHandler = (event, page) => {
    // Ваш код обработки изменения страницы
    console.log(`Page changed to ${page}`);
    onChange(page);
  };

  return (
    <Stack spacing={2}>
      {/* Используем стилизованный компонент вместо обычного Pagination */}
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
