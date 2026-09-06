"use client";

import { useEffect, useState } from "react";
import styles from "./shine.module.css";

export default function AccessButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 10_000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://pay.sereja.com.br/checkout/BzE4Ny1i"
      className={`${styles.shine} mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#dc2626] px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#b91c1c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-8 sm:w-auto sm:min-w-80 sm:text-lg`}
    >
      Quero Acessar agora
    </a>
  );
}
