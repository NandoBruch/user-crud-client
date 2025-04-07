import { ECookies } from "@/consts/cookies";
import { signin } from "@/services/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      setCookie(ECookies.ACCESS_TOKEN, data.access_token, {
        path: "/",
        maxAge: data.expires_in,
      });

      router.push("/users");
    },
    onError: (err) => {
      toast(err.message, { type: "error" });
    },
  });
};
