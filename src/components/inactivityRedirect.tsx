"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const InactivityRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    let timeout = setTimeout(() => {
      router.back();
    }, 180000); // 180 segundos sem interação

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        router.back();
      }, 30000);
    };

    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);
    window.addEventListener("touchstart", resetTimeout);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
      window.removeEventListener("touchstart", resetTimeout);
    };
  }, [router]);

  return null;
};

export default InactivityRedirect;
