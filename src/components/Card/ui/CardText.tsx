'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { MemoBox, MemoDivider } from '@/components/MuiOptimized';
import { featuresText, subscribeText } from './data';
import CardTypography from './CardTypography';
import type { CardVariantProps } from './interfaces';
import { Form } from '@/components/Form';
import { cardVariantsStyles } from './data';

const StyledDivider = styled(MemoDivider)(({ theme }) => ({
  borderColor: theme.palette.secondary.contrastText,
  borderWidth: '1px',
}));

const CardText = ({ variantCard }: CardVariantProps) => {
  const { accent, firstPart, lastPart } = subscribeText;
  const { textWidth, whiteSpace, textDirection, justifyContent, gap, paddingTopText } =
    cardVariantsStyles[variantCard];

  return (
    <MemoBox
      sx={{
        display: 'flex',
        flexDirection: textDirection ?? '',
        justifyContent: justifyContent,
        whiteSpace: whiteSpace,
        gap: gap ?? '',
        paddingTop: paddingTopText ?? '',
      }}
    >
      {variantCard === 'features' &&
        featuresText.map((item) => {
          const { id, accent, lastPart } = item;

          return (
            <React.Fragment key={id}>
              <CardTypography sx={{ width: textWidth }} variantTypography="card">
                <CardTypography variantTypography="accent-body1">{accent}</CardTypography>
                {lastPart}
              </CardTypography>
              {id === 1 ? <StyledDivider orientation="horizontal" flexItem /> : null}
            </React.Fragment>
          );
        })}
      {variantCard === 'subscribe' && (
        <MemoBox
          sx={{
            display: 'grid',
            gap: { xs: '14px', desktop: '30px' },
            padding: { desktop: '26px 0 0 3px' },
            width: textWidth,
          }}
        >
          <CardTypography variantTypography="card">{firstPart}</CardTypography>
          <CardTypography
            variantTypography="card"
            sx={{ whiteSpace: { xs: 'pre-line' }, width: { desktop: '864px' } }}
          >
            {lastPart}
          </CardTypography>
          <CardTypography className="accent-italic" variantTypography="accent-body1">
            {accent}
          </CardTypography>
          <Form />
        </MemoBox>
      )}
    </MemoBox>
  );
};

export default CardText;
