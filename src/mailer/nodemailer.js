const nodemailer = require('nodemailer');                               //Libreria 'nodemailer'
require('dotenv').config();
const { NODEMAILER } = process.env;                                     //Variables de entorno, NODEMAILER es la contraseña generada en Google


module.exports = {
    transporter: nodemailer.createTransport({
        service: 'gmail',                                               //Se escribe el servicio de correo
        auth: {
            user: 'pruebadesarrollo2184@gmail.com',                            //Correo de la empresa
            pass: NODEMAILER,                                           //Contraseña del correo
        },
    }),


    mailDetails: ( email,name,consecutive) => {                                           //^Mail de bienvenida para el cliente
        return {
            from: 'pruebadesarrollo2184@gmail.com',                            //Correo de la empresa
            to: email,                                                  //Email del usuario
            subject: `¡Bienvenido al centro Técnologico de Cúcuta!`,                  //Asunto del corre
            html: `
                <p>!Hola ${name}</p>
                <p>Tu solicitud sera atendida con el Número de radicado: ${consecutive}</p>
                <br/>
                <p><strong>Este e-mail se a generado automáticamente, por favor no conteste a este e-mail.</strong></p>
                <br/>
                
            `
        }
    },
}