import { ChangeEvent } from "react";

import { useCompountState } from "../Hooks/useCompoundState";
import { UseStateProps } from "../interfaces/interfaces";

export const UseState = ({ name }: UseStateProps) => {
  const { compundState, setCompundState } = useCompountState();
  const { error, loading, value } = compundState;

  return (
    <div>
      <h2> Eliminar {name}</h2>
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
};
