"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.8, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
