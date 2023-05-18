import React, { useEffect } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Continents() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Header isVisibleGoBack={true} />
      <h1>{router.query.index}</h1>
    </React.Fragment>
  );
}
