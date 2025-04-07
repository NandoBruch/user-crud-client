import { ECookies } from "@/consts/cookies";
import { deleteCookie } from "cookies-next/client";
import { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();
  return () => {
    deleteCookie(ECookies.ACCESS_TOKEN);
    router.push("/");
  };
};
