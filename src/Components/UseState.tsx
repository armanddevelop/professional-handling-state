import { ChangeEvent } from "react";

import { useCompountState } from "../Hooks/useCompoundState";
import { UseStateProps } from "../interfaces/interfaces";

export const UseState = ({ name }: UseStateProps) => {
  const { compundState, setCompundState } = useCompountState();
  const { error, loading, value, confirmed, deleted } = compundState;
  const title = <h2> Eliminar {name}</h2>;
  const handleEvent = (objValues: { [key: string]: string | boolean }) => {
    setCompundState((prevState) => {
      let updateState: { [key: string]: string | boolean } = {};
      for (const key in objValues) {
        updateState[key] = objValues[key];
      }
      return { ...prevState, ...updateState };
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompundState({
              ...compundState,
              value: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            setCompundState({
              ...compundState,
              loading: true,
              error: false,
            })
          }
        >
          Comprobar
        </button>
      </div>
    );
  } else if (confirmed && !deleted) {
    return (
      <>
        {title}
        <p>Pedimos Confirmacion, Esta segur@?</p>
        <button onClick={() => handleEvent({ deleted: true })}>
          Si, eliminar
        </button>
        <button onClick={() => handleEvent({ confirmed: false, value: "" })}>
          Nop, siempre no
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito</p>
        <button
          onClick={() =>
            handleEvent({ confirmed: false, deleted: false, value: "" })
          }
        >
          Recuperar Estado inicial
        </button>
      </>
    );
  }
};
