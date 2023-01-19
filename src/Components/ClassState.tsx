import { Component } from "react";

interface ClassStateProps {
  name: string;
}
interface stateComponent {
  error: boolean;
}
class ClassState extends Component<ClassStateProps, stateComponent> {
  state: stateComponent = {
    error: false,
  };
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2> Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {this.state.error && (
          <p>
            <strong>Error:</strong> El codigo es incorrecto
          </p>
        )}
        <input placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ error: !this.state.error })}>
          Comprobar
        </button>
      </div>
    );
  }
}
export { ClassState };
