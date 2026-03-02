'use client';

import { MemoBox } from '@/components/MuiOptimized';
import { PortfolioImage } from '@/components/PortfolioImage';
import { PortfolioDescription } from '@/components/PortfolioDescription';
import styles from './PortfolioSection.module.css';

const PortfolioSection = () => {
  return (
    <MemoBox
      sx={{
        position: 'relative',
        marginTop: {
          xs: '44px',
          sm: '56px',
          md: '73px',
          lg: '85px',
          xl: '66px',
          desktop: '246px',
        },
      }}
    >
      <hr className="divider" />
      <div className={styles.backgroundImage} />
      <MemoBox
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { sm: 'space-between' },
          width: { sm: '560px', md: '840px', lg: '1100px', desktop: '100%' },
          margin: { xs: '0 auto', desktop: 'unset' },
          alignItems: 'center',
          padding: { xs: '30px 0px', lg: '50px 0px', desktop: '80px 0px' },
        }}
      >
        <PortfolioImage />
        <MemoBox
          sx={{
            height: { xs: '400px', md: '450px', lg: 'auto' },
            width: { xs: '249px', sm: '250px', md: '330px', lg: '440px', desktop: '750px' },
          }}
        >
          <PortfolioDescription />
        </MemoBox>
      </MemoBox>
      <hr className="divider" />
    </MemoBox>
  );
};

export default PortfolioSection;
