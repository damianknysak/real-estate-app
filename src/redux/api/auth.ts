import { User } from "../../types/user.types";
import { api } from "./api";

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps extends LoginProps {
  firstName: string;
  lastName: string;
}

export const auth = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials: LoginProps) => {
        return {
          url: "/users/login",
          method: "POST",
          body: {
            ...credentials,
          },
        };
      },
    }),
    register: build.mutation({
      query: (credentials: RegisterProps) => {
        return {
          url: "/users/register",
          method: "POST",
          body: {
            ...credentials,
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = auth;
