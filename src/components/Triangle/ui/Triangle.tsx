'use client';

import { styled } from '@mui/material';

type TriangleVariant = {
  variantTriangle: 'one' | 'two';
};

const TriangleOne = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '9px',
  left: '20px',
  borderStyle: 'solid',
  borderWidth: '54px 275px 0 0',
  borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
  transform: 'rotate(357deg)',
  [theme.breakpoints.up('sm')]: {
    borderWidth: '56px 278px 0 0',
  },
  [theme.breakpoints.up('lg')]: {
    top: '6px',
    borderWidth: '59px 278px 0 0',
    transform: 'rotate(358deg)',
  },
  [theme.breakpoints.up('desktop')]: {
    top: '26px',
    left: '52px',
    borderWidth: '137px 879px 0 0',
    transform: 'rotate(357deg)',
  },
}));

const TriangleTwo = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '15px',
  left: '2px',
  borderStyle: 'solid',
  borderWidth: '154px 36px 0px',
  borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
  transform: 'rotate(357deg)',
  [theme.breakpoints.up('lg')]: {
    top: '10px',
    left: '-2px',
    borderWidth: '158px 41px 0px',
    transform: 'rotate(358deg)',
  },
  [theme.breakpoints.up('desktop')]: {
    top: '46px',
    left: '7px',
    borderWidth: '462px 110px 0px',
    transform: 'rotate(357deg)',
  },
}));

const Triangle = ({ variantTriangle }: TriangleVariant) => {
  return (
    <>
      {variantTriangle === 'one' && <TriangleOne />}
      {variantTriangle === 'two' && <TriangleTwo />}
    </>
  );
};

export default Triangle;
