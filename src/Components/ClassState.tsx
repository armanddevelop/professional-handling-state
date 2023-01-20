import { Component } from "react";
import { ClassStateProps, StateComponent } from "../interfaces/interfaces";
import { Loading } from "./Loading";
const SECURITY_CODE = "paradigma";
class ClassState extends Component<ClassStateProps, StateComponent> {
  state: StateComponent = {
    error: false,
    loading: false,
    value: "",
  };

  componentDidMount(): void {
    console.log("Esto dentro del componentDidMount ):????!!!");
  }
  componentDidUpdate(
    prevProps: Readonly<ClassStateProps>,
    prevState: Readonly<StateComponent>,
    snapshot?: any
  ): void {
    const { loading, value } = this.state;
    if (loading) {
      setTimeout(() => {
        this.setState({ loading: false });
        SECURITY_CODE !== value
          ? this.setState({ error: true })
          : this.setState({ error: false, value: "" });
      }, 3000);
    }
  }
  // UNSAFE_componentWillMount(): void {
  //   console.log("Esto dentro del componentWillMount !!!!!");
  // }

  render() {
    const { name } = this.props;
    const { value, error, loading } = this.state;
    return (
      <div>
        <h2> Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {error && !loading && (
          <p>
            <strong>Error:</strong> El codigo es incorrecto
          </p>
        )}
        {loading && <Loading />}
        <input
          placeholder="Codigo de seguridad"
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.setState({ loading: !this.state.loading })}>
          Comprobar
        </button>
      </div>
    );
  }
}
export { ClassState };
