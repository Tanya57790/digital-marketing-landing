'use client';

import { styled } from '@mui/material';

type ContainerVariant = {
  variant: 'flex' | 'grid';
  children: React.ReactNode;
};

const FlexContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: 'auto',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    width: '720px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '920px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '1100px',
  },
}));

const GridContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '30px',
  padding: '40px 0px',
  alignItems: 'center',
  justifyItems: 'center',
  [theme.breakpoints.up('md')]: {
    padding: '0px',
    gridAutoFlow: 'column',
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: '80px 150px 130px',
    gap: '15px',
    justifyItems: 'flex-start',
  },
  [theme.breakpoints.up('lg')]: {
    rowGap: '20px',
    gridTemplateColumns: '100px 200px 180px',
    columnGap: '60px',
  },
  [theme.breakpoints.up('xl')]: {
    columnGap: '80px',
    gridTemplateColumns: '100px 250px 200px',
  },
}));

const FooterContainer = ({ variant, children }: ContainerVariant) => {
  return (
    <>
      {variant === 'flex' && <FlexContainer>{children}</FlexContainer>}
      {variant === 'grid' && <GridContainer>{children}</GridContainer>}
    </>
  );
};

export default FooterContainer;
