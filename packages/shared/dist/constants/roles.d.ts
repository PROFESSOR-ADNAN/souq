export declare const ROLES: {
    readonly BUYER: "buyer";
    readonly SELLER: "seller";
    readonly ADMIN: "admin";
    readonly DRIVER: "driver";
};
export type Role = (typeof ROLES)[keyof typeof ROLES];
