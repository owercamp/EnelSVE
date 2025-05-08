import { Component, ReactNode } from "react";
import Container from "./container";
import React from "react";
import { IGeneral } from "../../interfaces/interfaces";

class TitleApp extends Component<IGeneral> {
  render(): ReactNode {
    const variant_text = `text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl`;
    const styles = `inline-block w-full sm:w-auto flex justify-center items-center bg-soa-light-700 dark:bg-soa-dark-900 dark:text-white text-gray-200 px-4 sm:px-6 md:px-8 ${variant_text}`;

    return (
      <Container classes={`${styles}`}>
        {this.props.title}
      </Container>
    )
  }
}

export default TitleApp;
