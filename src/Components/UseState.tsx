import { useEffect, useState } from "react";

interface UseStateProps {
  name: string;
}

export const UseState = ({ name }: UseStateProps) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
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
      <input placeholder="Codigo de seguridad" />
      <button onClick={() => setLoading(!loading)}>Comprobar</button>
    </div>
  );
};
