'use client';

import { styled, List, Box, Typography, ListItem } from '@mui/material';
import Image from 'next/image';
import { PageItemProps } from './interface';

const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

const StyledItem = styled(ListItem)(({ theme }) => ({
  display: 'grid',
  justifyContent: 'start',
  alignItems: 'start',
  gridTemplateColumns: '80px 170px',
  paddingLeft: '0px',
  paddingRight: '0px',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '100px 230px',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '120px 320px',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: '130px 310px',
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: '130px max-content',
  },
  '& > p': {
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('desktop')]: {
      fontSize: '24px',
    },
  },
}));

const TypographyItem = styled(Typography)({
  fontWeight: 400,
});

const PortfolioList = ({ pageItems }: PageItemProps) => {
  return (
    <>
      {pageItems.map((item) => (
        <Box key={item.id} sx={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
          <Box
            sx={{
              position: 'relative',
              height: item.sizeHeight,
              width: item.sizeWidth,
            }}
          >
            <Image src={item.src} fill sizes="100vw" role="img" alt={item.company + ' image'} />
          </Box>
          <List>
            <StyledItem>
              <TypographyTitle variant="body1">Result:</TypographyTitle>
              <TypographyItem variant="body1">{item.result}</TypographyItem>
            </StyledItem>
            <StyledItem>
              <TypographyTitle variant="body1">Type:</TypographyTitle>
              <TypographyItem variant="body1">{item.type}</TypographyItem>
            </StyledItem>
            <StyledItem>
              <TypographyTitle variant="body1">Company:</TypographyTitle>
              <TypographyItem variant="body1">{item.company}</TypographyItem>
            </StyledItem>
            <StyledItem>
              <TypographyTitle variant="body1">Product:</TypographyTitle>
              <TypographyItem variant="body1">{item.product}</TypographyItem>
            </StyledItem>
            <StyledItem>
              <TypographyTitle variant="body1">Platform:</TypographyTitle>
              <TypographyItem variant="body1">{item.platform}</TypographyItem>
            </StyledItem>
          </List>
        </Box>
      ))}
    </>
  );
};

export default PortfolioList;
