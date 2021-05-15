import React from "react";
import { useRouter } from "next/router";

function Reservation() {
  const router = useRouter();

  return <div onClick={() => router.push("/user/login")}>Reservation</div>;
}

export default Reservation;
