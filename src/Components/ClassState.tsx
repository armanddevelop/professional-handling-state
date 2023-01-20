import { Component } from "react";
import { ClassStateProps, stateComponent } from "../interfaces/interfaces";
import { Loading } from "./Loading";

class ClassState extends Component<ClassStateProps, stateComponent> {
  state: stateComponent = {
    error: false,
    loading: false,
  };

  componentDidMount(): void {
    console.log("Esto dentro del componentDidMount ):????!!!");
  }
  componentDidUpdate(
    prevProps: Readonly<ClassStateProps>,
    prevState: Readonly<stateComponent>,
    snapshot?: any
  ): void {
    console.log("update the component");
    console.log("Esto vale prevProps ", prevProps);
    console.log("Esto vale prevState ", prevState);
    const { loading } = this.state;
    if (loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }
  // UNSAFE_componentWillMount(): void {
  //   console.log("Esto dentro del componentWillMount !!!!!");
  // }
  render() {
    const { name } = this.props;
    console.log("esto vale this.state ", this.state);
    return (
      <div>
        <h2> Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {this.state.error && (
          <p>
            <strong>Error:</strong> El codigo es incorrecto
          </p>
        )}
        {this.state.loading && <Loading />}
        <input placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ loading: !this.state.loading })}>
          Comprobar
        </button>
      </div>
    );
  }
}
export { ClassState };
