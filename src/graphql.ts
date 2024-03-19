
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginInput {
    email: string;
    password: string;
}

export class CreateUserInput {
    fullName: string;
    shortName: string;
    email: string;
    password: string;
    phone: string;
    role: number;
    gender?: Nullable<number>;
}

export class UserProfile {
    fullName?: Nullable<string>;
    shortName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    linkedIn?: Nullable<string>;
    role?: Nullable<number>;
    gender?: Nullable<number>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    isFrozen?: Nullable<boolean>;
    skills?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class Auth {
    token?: Nullable<string>;
    refreshToken?: Nullable<string>;
    expired?: Nullable<string>;
}

export class LoginUser {
    auth?: Nullable<Auth>;
    profile?: Nullable<UserProfile>;
}

export class LoginResponse {
    statusCode: number;
    message?: Nullable<string>;
    data?: Nullable<LoginUser>;
    error?: Nullable<string>;
}

export abstract class IMutation {
    abstract login(input: LoginInput): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract createUser(input: CreateUserInput): Nullable<CreateUserResponse> | Promise<Nullable<CreateUserResponse>>;
}

export class User {
    fullName?: Nullable<string>;
    shortName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    linkedIn?: Nullable<string>;
    role?: Nullable<number>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    gender?: Nullable<number>;
    isFrozen?: Nullable<boolean>;
    skills?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class CreateUserResponse {
    statusCode: number;
    message?: Nullable<string>;
    data?: Nullable<User>;
    error?: Nullable<string>;
}

export class GetAllUserResponse {
    statusCode: number;
    message?: Nullable<string>;
    data?: Nullable<Nullable<User>[]>;
    error?: Nullable<string>;
}

export abstract class IQuery {
    abstract getAllUser(): Nullable<GetAllUserResponse> | Promise<Nullable<GetAllUserResponse>>;
}

type Nullable<T> = T | null;
