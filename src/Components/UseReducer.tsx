import { ChangeEvent } from "react";
import { actionTypes } from "../actionTypes/actionTypes";
import { useHookReducer } from "../Hooks/useHookReducer";
import { UseStateProps } from "../interfaces/interfaces";

export const UseReducer = ({ name }: UseStateProps) => {
  const title = <h2> Eliminar {name}</h2>;
  const { state, dispatch } = useHookReducer();
  const { deleted, confirmed, error, loading, value } = state;
  const handleWrite = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: actionTypes.write,
      payload: { value },
    });
  };
  if (!deleted && !confirmed) {
    return (
      <div>
        {title}
        <p>Por favor, escribe el codigo de seguridad.</p>
        {error && !loading && (
          <p>
            <strong>Error:</strong> El codigo es incorrecto
          </p>
        )}
        {loading && (
          <p>
            <strong>Cargando....</strong>
          </p>
        )}
        <input
          placeholder="Codigo de seguridad"
          value={value}
          onChange={handleWrite}
        />
        <button onClick={() => dispatch({ type: actionTypes.check })}>
          Comprobar
        </button>
      </div>
    );
  } else if (confirmed && !deleted) {
    return (
      <>
        {title}
        <p>Pedimos Confirmacion, Esta segur@?</p>
        <button onClick={() => dispatch({ type: actionTypes.delete })}>
          Si, eliminar
        </button>
        <button onClick={() => dispatch({ type: actionTypes.regret })}>
          Nop, siempre no
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito!!!!!!</p>
        <button onClick={() => dispatch({ type: actionTypes.return })}>
          Recuperar Estado inicial
        </button>
      </>
    );
  }
};
