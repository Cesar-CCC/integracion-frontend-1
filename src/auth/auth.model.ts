export interface claim{
    nombre: string;
    valor: string;
}

export interface creadencialesUsuario{
    email: string;
    password: string;
}

export interface respuestaAutenticacion{
    token: string;
    expiracion: Date;
    names: string;
}