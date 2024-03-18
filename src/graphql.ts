
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    fullName: string;
    shortName: string;
    email: string;
    password: string;
    phone: string;
    linkedIn: string;
    role: number;
    startDate: string;
    endDate: string;
    isFrozen: number;
    skills?: Nullable<Nullable<string>[]>;
}

export class User {
    fullName?: Nullable<string>;
    shortName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    phone?: Nullable<string>;
    linkedIn?: Nullable<string>;
    role?: Nullable<number>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    isFrozen?: Nullable<number>;
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

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<CreateUserResponse> | Promise<Nullable<CreateUserResponse>>;
}

type Nullable<T> = T | null;
