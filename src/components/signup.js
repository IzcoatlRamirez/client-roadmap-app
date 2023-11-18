import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';

import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@mui/material'
import * as Yup from 'yup'
import axios from 'axios'


const Signup = () => {
    const endPointBase = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";
    const crearUsuarioEndpoint = endPointBase + "/api/crearUsuario"
    const paperStyle = { padding: 20, width: 450, margin: "0 auto", backgroundImage: 'radial-gradient(circle, #ddd, #999)' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#41D2F6' }
    const textStyle = { marginBottom: '12px' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {

        email: '',
        passwd: '',
        terminosYCondiciones: false
    }


    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Ingrese un correo valido").required("Required"),
        passwd: Yup.string().min(8, "Minimo 8 caracteres").required("Required"),
        terminosYCondiciones: Yup.string().oneOf(["true"], "Acepto terminos y condiciones")
    })


    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = (values, props) => {
        axios
            .post(crearUsuarioEndpoint, values)
            .then((response) => {
                if (response.data.success) {
                    setSuccessMessage("Usuario registrado exitosamente");

                    // Llamar a la ruta de tu backend para enviar el correo de bienvenida
                    axios.post(endPointBase+'/api/email', {
                        toMail: values.email,
                        subject: '¡Bienvenido!',
                        message: 'Gracias por registrarte a tu ruta personalizada! Bienvenido.'
                    })
                        .then((emailResponse) => {
                            console.log('Correo de bienvenida enviado:', emailResponse);
                        })
                        .catch((emailError) => {
                            console.error('Error al enviar el correo de bienvenida:', emailError);
                        });

                    setErrorMessage("");
                    console.log(response.data);
                    // Recarga la página solo si se crea un nuevo correo
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    setSuccessMessage("");
                    setErrorMessage(response.data.message);
                    // Habilita el botón de registro sin recargar la página
                    props.setSubmitting(false);
                }
            })
            .catch((error) => {
                setSuccessMessage("");
                setErrorMessage("Correo existente, ingrese otro correo");
                console.log(error);
                // Habilita el botón de registro sin recargar la página
                props.setSubmitting(false);
            });
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <PersonAddAlt1Icon />
                    </Avatar>
                    <h2 style={headerStyle}>Registrarse</h2>
                    <Typography variant='caption' gutterBottom> Por favor ingrese los datos para crear su cuenta!

                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            <Field as={TextField} fullWidth name="email" label='Correo' helperText={<ErrorMessage name="email" />} style={textStyle} />
                            <Field as={TextField} fullWidth name="passwd" type="password" label='Contraseña' helperText={<ErrorMessage name="passwd" />} style={textStyle} />
                            <FormControlLabel control={<Field as={Checkbox} name='terminosYCondiciones' />} label="Acepta los terminos y condiciones" />
                            <FormHelperText><ErrorMessage name="terminosYCondiciones" /></FormHelperText>

                            <Button type='submit' color='primary' variant="contained" endIcon={<SendIcon />} disabled={props.isSubmitting} style={btnstyle} fullWidth >{props.isSubmitting ? "Cargando" : "Registrarse"}</Button>

                        </Form>
                    )}
                </Formik>

            </Paper>
        </Grid>
    );
}

export default Signup;