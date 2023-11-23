import { Property } from "../../types/property.types";
import { api } from "./api";

export const listing = api.injectEndpoints({
  endpoints: (build) => ({
    addListing: build.mutation<Property, { formData: Property; token: string }>(
      {
        query: ({ formData, token }) => ({
          url: "/properties",
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      }
    ),
  }),
});

export const { useAddListingMutation } = listing;
