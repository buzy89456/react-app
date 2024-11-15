import dayjs, { type Dayjs } from 'dayjs';
import { z } from 'zod';

export const formSchema = z
  .object({
    firstName: z.string().min(1, 'First name cannot be empty.'),
    lastName: z.string().min(1, 'Last name cannot be empty.'),
    gender: z.string().optional(),
    birth: z.instanceof(dayjs as unknown as typeof Dayjs).nullable(),
    email: z
      .string()
      .optional()
      .refine(
        (val) =>
          !val ||
          val.trim() === '' ||
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(val),
        {
          message: 'Please enter a valid email address.',
        }
      ),
    phoneNumber: z
      .string()
      .optional()
      .refine((val) => !val || val.trim() === '' || /^\+852\d{8}$/.test(val), {
        message:
          'Please enter a valid phone number. It must start with +852 followed by 8 digits.',
      }),
    password: z.string().min(1, 'Password cannot be empty.'),
    confirmPassword: z.string().min(1, 'Confirm password cannot be empty.'),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: 'Either email or phone number is required.',
    path: ['email', 'phoneNumber'],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password and confirm password do not match.',
    path: ['confirmPassword'],
  });

export type FormSchema = z.infer<typeof formSchema>;
