'use client';

import Image from 'next/image';
import { styled, useTheme } from '@mui/material/styles';
import { MemoBox, MemoTypography, MemoGrid } from '@/components/MuiOptimized';
import { Button } from '@/components/Button';
import styles from './HeroSection.module.css';

const typographyItems = {
  title: 'Boost your email marketing results!',
  text: 'We help B2C brands grow their email-attributed revenue',
};

const AccentText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const HeroSection = () => {
  const theme = useTheme();

  return (
    <MemoBox>
      <div className={styles.imageContainer}>
        <picture>
          <source srcSet="/assets/images/background-red_d.webp" media="(min-width: 600px)" />
          <Image
            src="/assets/images/background-red_m.png"
            fill
            priority
            fetchPriority="high"
            role="img"
            alt="Hero background"
          />
        </picture>
      </div>
      <MemoBox
        sx={{
          paddingTop: { xs: '40px', sm: '100px', md: '150px', lg: '143px' },
          width: 'min-content',
        }}
      >
        <MemoGrid
          display="grid"
          gap="10px"
          sx={{ width: { xs: '270px', sm: '370px', md: '650px', lg: '800px', desktop: '1310px' } }}
        >
          <MemoBox>
            <MemoTypography
              variant="h1"
              sx={{
                color: theme.palette.primary.contrastText,
                fontSize: { sm: '40px', md: '55px', lg: '72px', xl: '84px', desktop: '128px' },
                letterSpacing: { desktop: '0.2px' },
                fontWeight: 700,
                lineHeight: '120%',
              }}
            >
              <AccentText>{typographyItems.title.split(' ')[0]}</AccentText>
              {` ${typographyItems.title.split(' ').slice(1).join(' ')}`}
            </MemoTypography>
          </MemoBox>
          <MemoTypography
            variant="body1"
            className={styles.heroTypography}
            sx={{
              fontWeight: 300,
              fontSize: { sm: '15px', md: '25px', desktop: '32px' },
              lineHeight: { xs: '120%', desktop: '100%' },
            }}
          >
            {typographyItems.text}
          </MemoTypography>
          <MemoBox sx={{ paddingTop: { xs: '10px', md: '15px', desktop: '32px' } }}>
            <Button variantButton="primary" />
          </MemoBox>
        </MemoGrid>
      </MemoBox>
    </MemoBox>
  );
};

export default HeroSection;
