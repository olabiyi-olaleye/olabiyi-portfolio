"use client";

import { useEffect, useState } from "react";

function lagosTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

// Shows the current time in Lagos so a visitor can see when I'm likely to reply.
export function LagosClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(lagosTime());
    const id = setInterval(() => setTime(lagosTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? "--:--"} in Lagos</span>;
}
