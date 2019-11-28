import React from "react";
import styled from "@emotion/styled";

const AppName = styled.h1`
  margin: 5px 5px 5px 20px;
`;

export default function Logo({ text }) {
  return <AppName>{text}</AppName>;
}
