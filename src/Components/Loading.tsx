import { Component, ReactNode } from "react";

class Loading extends Component {
  componentWillUnmount(): void {
    console.log("Esto dentro del componentWillUnmount desde Loading :)!!!");
  }
  render(): ReactNode {
    return (
      <p>
        <strong>Cargando....</strong>
      </p>
    );
  }
}

export { Loading };
