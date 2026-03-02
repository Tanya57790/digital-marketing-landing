'use client';

import { styled } from '@mui/material/styles';
import { MemoBox, MemoTypography } from '@/components/MuiOptimized';
import Image from 'next/image';
import type { PageItemProps } from './interface';
import styles from './PortfolioList.module.css';

const TypographyTitle = styled(MemoTypography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

const TypographyItem = styled(MemoTypography)({
  fontWeight: 400,
});

const PortfolioList = ({ pageItems }: PageItemProps) => {
  return (
    <>
      {pageItems.map((item) => (
        <MemoBox key={item.id} sx={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
          <MemoBox
            sx={{
              position: 'relative',
              height: item.sizeHeight,
              width: item.sizeWidth,
            }}
          >
            <Image src={item.src} fill sizes="100vw" role="img" alt={item.company + ' image'} />
          </MemoBox>
          <ul className={styles.list}>
            <li className={styles.item}>
              <TypographyTitle variant="body1">Result:</TypographyTitle>
              <TypographyItem variant="body1">{item.result}</TypographyItem>
            </li>
            <li className={styles.item}>
              <TypographyTitle variant="body1">Type:</TypographyTitle>
              <TypographyItem variant="body1">{item.type}</TypographyItem>
            </li>
            <li className={styles.item}>
              <TypographyTitle variant="body1">Company:</TypographyTitle>
              <TypographyItem variant="body1">{item.company}</TypographyItem>
            </li>
            <li className={styles.item}>
              <TypographyTitle variant="body1">Product:</TypographyTitle>
              <TypographyItem variant="body1">{item.product}</TypographyItem>
            </li>
            <li className={styles.item}>
              <TypographyTitle variant="body1">Platform:</TypographyTitle>
              <TypographyItem variant="body1">{item.platform}</TypographyItem>
            </li>
          </ul>
        </MemoBox>
      ))}
    </>
  );
};

export default PortfolioList;
