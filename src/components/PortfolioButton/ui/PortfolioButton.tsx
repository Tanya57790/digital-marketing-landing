'use client';

import { styled } from '@mui/material';

type ButtonType = {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
};

const StyledButton = styled('button')(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '100px',
  background: theme.palette.secondary.contrastText,
  position: 'relative',
  width: '41px',
  height: '41px',
  cursor: 'pointer',
  '&:disabled, &:disabled > span': {
    borderColor: theme.palette.grey[500],
    cursor: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '24px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '28px',
  },
  [theme.breakpoints.up('desktop')]: {
    borderWidth: '2px',
    padding: '32px',
  },
}));

const PortfolioButton = ({ onClick, disabled, ariaLabel, children }: ButtonType) => {
  return (
    <>
      <StyledButton onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
        {children}
      </StyledButton>
    </>
  );
};

export default PortfolioButton;
