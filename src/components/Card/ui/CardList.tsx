'use client';

import { styled, useTheme, List, ListItem, Typography } from '@mui/material';
import { supportItems, featureItems } from './data';
import type { CardVariantProps } from './interfaces';
import { cardVariantsStyles } from './data';

const StyledList = styled(List)(({ theme }) => ({
  display: 'grid',
  listStyle: 'disc',
  gap: '23.3px',
  marginTop: '4px',
  paddingLeft: '15px',
  [theme.breakpoints.up('desktop')]: {
    gap: '15px',
    marginTop: '-10px',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'list-item',
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  '::marker': {
    color: theme.palette.primary.main,
    fontSize: '15px',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '28px',
    },
  },
}));

const CardList = ({ variantCard }: CardVariantProps) => {
  const theme = useTheme();
  const listItems = variantCard === 'support' ? supportItems : featureItems;
  const { listWidth, whiteSpace } = cardVariantsStyles[variantCard];

  return (
    <StyledList
      sx={{ marginRight: { desktop: variantCard === 'support' ? '110px' : '' }, width: listWidth }}
    >
      {listItems.map((item) => {
        return (
          <StyledListItem
            key={item.id}
            sx={{
              whiteSpace: whiteSpace,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.secondary.contrastText,
                lineHeight: '120%',
                marginLeft: { desktop: '-3px' },
                fontSize: { lg: '16px', xl: '20px', desktop: '24px' },
              }}
            >
              {item.textItem}
            </Typography>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

export default CardList;
