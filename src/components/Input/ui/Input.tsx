'use client';

import { styled } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

const StyledInput = styled('input')(({ theme }) => ({
  width: '143px',
  border: 'none',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',
  paddingLeft: '10px',
  fontSize: '14px',
  boxSizing: 'border-box',
  fontFamily: '"Roboto", "Arial", sans-serif',
  fontWeight: 300,
  [theme.breakpoints.up('sm')]: {
    width: '234px',
  },
  [theme.breakpoints.up('md')]: {
    width: '272px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '350px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '550px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '732px',
    paddingLeft: '30px',
    fontSize: '20px',
  },
  ':focus': {
    outline: 'none',
  },
}));

const Input = ({ ...props }: UseFormRegisterReturn) => {
  return (
    <StyledInput
      id="email"
      placeholder="Your Email"
      type="email"
      max-length="320"
      autoComplete="email"
      {...props}
    />
  );
};

export default Input;
