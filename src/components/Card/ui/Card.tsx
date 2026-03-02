'use client';

import { styled } from '@mui/material/styles';
import { MemoBox } from '@/components/MuiOptimized';
import CardTitle from './CardTitle';
import CardList from './CardList';
import CardText from './CardText';
import { cardVariantsStyles } from './data';
import type { CardVariantProps } from './interfaces';

const StyledBox = styled(MemoBox)(({ theme }) => ({
  position: 'relative',
  top: '30px',
  height: 'auto',
  margin: '0 auto',
  width: '280px',
  padding: '24px 20px',
  borderRadius: '20px',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: '1px 1px 33px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('sm')]: {
    width: '530px',
    padding: '30px',
  },
  [theme.breakpoints.up('md')]: {
    width: '800px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '1100px',
    padding: '50px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '1436px',
  },
  [theme.breakpoints.up('desktop')]: {
    top: '100px',
    width: '1800px',
    padding: '80px',
  },
}));

const Card = ({ variantCard }: CardVariantProps) => {
  const { display, justifyContent, flexDirection } = cardVariantsStyles[variantCard];
  return (
    <StyledBox
      sx={{
        display: variantCard === 'support' ? 'block' : 'flex',
        justifyContent: justifyContent,
        flexDirection: flexDirection,
      }}
    >
      <MemoBox
        sx={{
          display: display,
          gap: '10px',
          justifyContent: { sm: 'space-between' },
          alignItems: { sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <CardTitle variantCard={variantCard} />
        {variantCard !== 'subscribe' && <CardList variantCard={variantCard} />}
      </MemoBox>
      {variantCard !== 'support' && <CardText variantCard={variantCard} />}
    </StyledBox>
  );
};

export default Card;
