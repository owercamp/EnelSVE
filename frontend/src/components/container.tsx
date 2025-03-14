import React, { Component, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode,
  classes: string
}
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