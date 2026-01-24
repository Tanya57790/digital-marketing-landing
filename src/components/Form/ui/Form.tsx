'use client';

import { Box, styled, useTheme, Typography } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema, type InferSchema } from '@/lib/subscribe-schema';
import { addSubscriber } from '@/app/api/subscription/route';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

const responsiveSizes = { xs: '12px', md: '14x', xl: '18px', desktop: '20px' };

const Span = styled('span')(({ theme }) => ({
  fontFamily: '"Roboto", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '100%',
  letterSpacing: 0,
  textTransform: 'none',
  color: theme.palette.grey[500],
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'grid',
  gap: '10px',
  [theme.breakpoints.up('xl')]: {
    gap: '15px',
  },
}));

const ErrorMessage = styled('p')({
  color: '#d10000',
  margin: 0,
});

const Form = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferSchema>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<InferSchema> = async (data) => {
    const result = await addSubscriber(data);

    console.log(result);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.secondary.contrastText,
            fontSize: { desktop: '40px' },
            lineHeght: '1.2',
            padding: '4px 0px 10px 0px',
            whiteSpace: { xs: 'pre-line', desktop: 'normal' },
          }}
        >
          {'Subscribe to our\nnewsletters'}
        </Typography>
        <Box display="flex" paddingBottom="10px">
          <Input {...register('email')} />
          <Button variantButton="submit" />
        </Box>
        {errors.email && (
          <ErrorMessage sx={{ fontSize: responsiveSizes }}>{errors.email.message}</ErrorMessage>
        )}
        <Span sx={{ fontSize: responsiveSizes }}>Согласие на получение писем?</Span>
      </StyledForm>
    </>
  );
};

export default Form;
