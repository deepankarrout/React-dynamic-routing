import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

export default function CardDetails() {
  const { state } = useLocation();

  return (
    <Card {...state}>
      <h2 class="crayons-story__dtls">{state.body}</h2>
    </Card>
  );
}
