
import React, { useState } from "react";
import { Paper } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from "../components/login";
import SignUp from "../components/signup"

const SignInOutContainer = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle={width:740, margin:"20px auto"}

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                position="relative"
            >
                {value === index && (
                    <Box >
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
        <>
            <Paper elevation= {20} style={paperStyle}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Iniciar Sesion" />
                <Tab label="Registrarse" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Login handleChange={handleChange} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <SignUp  />
            </CustomTabPanel>

        </Paper>

        </>
    )


}

export default SignInOutContainer;