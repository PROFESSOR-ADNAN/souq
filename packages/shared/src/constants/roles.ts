export const ROLES = {
  BUYER: 'buyer',
  SELLER: 'seller',
  ADMIN: 'admin',
  DRIVER: 'driver',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
