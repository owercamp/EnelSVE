import React, { Component, ReactNode } from "react"
import IContainer from "../../interfaces/IContainer";


class Container extends Component<IContainer> {
  render(): ReactNode {
    return (
      <div className={this.props.classes}>
        {this.props.children}
      </div>
    )
  }
}

export default Container;