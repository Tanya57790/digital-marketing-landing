'use client';

import { styled, useTheme } from '@mui/material/styles';
import { MemoList, MemoListItem, MemoTypography } from '@/components/MuiOptimized';
import { supportItems, featureItems } from './data';
import type { CardVariantProps } from './interfaces';
import { cardVariantsStyles } from './data';

const StyledList = styled(MemoList, {
  shouldForwardProp: (prop) => prop !== 'variantCard',
})<CardVariantProps>(({ theme, variantCard }) => ({
  display: 'grid',
  listStyle: 'disc',
  marginTop: '4px',
  gap: variantCard === 'support' ? '23.3px' : '15px',
  paddingLeft: '15px',
  [theme.breakpoints.up('desktop')]: {
    gap: '15px',
    marginTop: '-10px',
  },
}));

const StyledListItem = styled(MemoListItem)(({ theme }) => ({
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
      variantCard={variantCard}
      sx={{
        marginRight: { desktop: variantCard === 'support' ? '110px' : '' },
        width: listWidth,
      }}
    >
      {listItems.map((item) => {
        return (
          <StyledListItem
            key={item.id}
            sx={{
              whiteSpace: whiteSpace,
            }}
          >
            <MemoTypography
              variant="body1"
              sx={{
                fontWeight: variantCard === 'features' ? 300 : 400,
                color: theme.palette.secondary.contrastText,
                lineHeight: '120%',
                marginLeft: { desktop: '-3px' },
                fontSize: { lg: '16px', xl: '20px', desktop: '24px' },
              }}
            >
              {item.textItem}
            </MemoTypography>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

export default CardList;
