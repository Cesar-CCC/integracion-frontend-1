import { claim, respuestaAutenticacion } from "./auth.model";

const llaveToken = "token";
const llaveExpiracion = "token-expiracion";
const names = "nombres";
export function guardarTokenLocalStorage(
  autenticacion: respuestaAutenticacion
) {
  localStorage.setItem(llaveToken, autenticacion.token);
  localStorage.setItem(llaveExpiracion, autenticacion.expiracion.toString());
  localStorage.setItem(names, autenticacion.names);
}
export function logout() {
  localStorage.removeItem(llaveToken);
  localStorage.removeItem(llaveExpiracion);
  localStorage.removeItem(names);
}
