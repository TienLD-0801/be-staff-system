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

export class Pager {
  limit: number;
  offset?: Nullable<number>;
  page?: Nullable<number>;
  isTakeAll?: Nullable<boolean>;
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
  accessToken?: Nullable<string>;
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
  abstract login(
    input: LoginInput,
  ): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

  abstract createUser(
    input: CreateUserInput,
  ): Nullable<CreateUserResponse> | Promise<Nullable<CreateUserResponse>>;
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
  data?: Nullable<UsersResponse>;
  error?: Nullable<string>;
}

export class UserListResponse {
  id?: Nullable<string>;
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

export class UsersResponse {
  userList?: Nullable<Nullable<UserListResponse>[]>;
  paging?: Nullable<Paging>;
}

export class UserById {
  id?: Nullable<string>;
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

export class GetUserByIdResponse {
  statusCode: number;
  message?: Nullable<string>;
  data?: Nullable<UserById>;
  error?: Nullable<string>;
}

export abstract class IQuery {
  abstract getAllUsers(
    pager: Pager,
    filterConditions?: Nullable<JSON>,
    orderConditions?: Nullable<JSON>,
  ): Nullable<GetAllUserResponse> | Promise<Nullable<GetAllUserResponse>>;

  abstract getUserById(
    id: string,
  ): Nullable<GetUserByIdResponse> | Promise<Nullable<GetUserByIdResponse>>;
}

export class Paging {
  limit: number;
  offset: number;
  page: number;
  totalCount: number;
  isNext?: Nullable<boolean>;
  isPrev?: Nullable<boolean>;
  orders?: Nullable<JSON>;
  filters?: Nullable<JSON>;
}

export type JSON = any;
type Nullable<T> = T | null;
