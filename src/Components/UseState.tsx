import { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { UseStateProps } from "../interfaces/interfaces";

const SECURITY_CODE = "paradigma";
export const UseState = ({ name }: UseStateProps) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");
  const handleClick = () => {
    setLoading(!loading);
    if (error) setError(false);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        valueInput.trim().toLocaleLowerCase() !== SECURITY_CODE &&
          setError(true);
      }, 3000);
    }
  }, [loading]);
  return (
    <div>
      <h2> Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {error && (
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
        value={valueInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValueInput(e.target.value)
        }
      />
      <button onClick={handleClick}>Comprobar</button>
    </div>
  );
};
