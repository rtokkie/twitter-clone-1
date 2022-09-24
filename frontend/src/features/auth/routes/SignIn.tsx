import { Button, Center, Divider, Stack } from '@chakra-ui/react';
import { z } from 'zod';

import { Form, InputField } from '@/components/Form';
import { AppHeading } from '@/components/Heading';

import { Layout } from '../components';

const schema = z.object({
  name: z
    .string()
    .min(3, 'Name must be over 3 characters')
    .min(15, 'Name must be no more than 15 characters'),
  password: z.string().min(7, 'Password must be over 7 characters'),
});

type RegisterValue = {
  name: string;
  password: string;
};

export const SignIn = () => {
  const onSubmit = (values: RegisterValue) => {
    console.log(values);
  };

  return (
    <Layout>
      <Center>
        <Stack w="md" mx="4" p="8" borderRadius="md" bg="white">
          <AppHeading alignSelf="center">Twitter Clone</AppHeading>

          <Form<RegisterValue, typeof schema> onSubmit={onSubmit} schema={schema}>
            {({ register, formState: { errors } }) => (
              <Stack spacing="6">
                <Stack spacing="4">
                  <InputField label="Name" registration={register('name')} error={errors.name} />

                  <InputField
                    label="Password"
                    registration={register('password')}
                    error={errors.password}
                  />
                </Stack>

                <Divider />

                <Button type="submit">Sign In</Button>
              </Stack>
            )}
          </Form>
        </Stack>
      </Center>
    </Layout>
  );
};
