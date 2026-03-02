'use client';

import { styled } from '@mui/material/styles';
import { MemoBox } from '@/components/MuiOptimized';

const Rectangle = styled('span')(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '32px 23px 0 0',
  borderColor: `${theme.palette.primary.main}`,
}));

const Triangle = styled('span')(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '23px 23px 0 0',
  borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
}));

const Quote = () => {
  return (
    <MemoBox sx={{ display: 'flex', justifyContent: 'space-between', width: { xs: '56px' } }}>
      <MemoBox sx={{ display: 'flex', flexDirection: 'column' }}>
        <Rectangle />
        <Triangle />
      </MemoBox>
      <MemoBox sx={{ display: 'flex', flexDirection: 'column' }}>
        <Rectangle />
        <Triangle />
      </MemoBox>
    </MemoBox>
  );
};

export default Quote;
