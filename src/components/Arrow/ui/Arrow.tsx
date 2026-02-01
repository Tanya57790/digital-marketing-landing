'use client';

import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

type ArrowVariant = {
  variantArrow: 'left' | 'right';
};

const Arrow = ({ variantArrow }: ArrowVariant) => {
  return (
    <>
      {variantArrow === 'left' && <ArrowLeft />}
      {variantArrow === 'right' && <ArrowRight />}
    </>
  );
};

export default Arrow;
