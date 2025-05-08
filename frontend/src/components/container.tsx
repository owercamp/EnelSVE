import React, { Component, ReactNode } from "react"
import { ContainerProps } from "../../interfaces/interfaces";


class Container extends Component<ContainerProps> {
  render(): ReactNode {
    return (
      <div className={this.props.classes}>
        {this.props.children}
      </div>
    )
  }
}

export default Container;