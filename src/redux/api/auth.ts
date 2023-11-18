import { User } from "../../types/user.types";
import { api } from "./api";

export interface LoginProps {
  email: string;
  password: string;
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
  }),
});

export const { useLoginMutation } = auth;
