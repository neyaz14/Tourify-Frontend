import { baseApi } from "@/redux/baseApi";
import { IResponse, ISendOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    verifyOtp: builder.mutation({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo
      })
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
        // data: userInfo
      }),
        providesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useSendOtpMutation, useVerifyOtpMutation, useUserInfoQuery,useLogoutMutation } = authApi;
