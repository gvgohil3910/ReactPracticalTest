import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, InputLabel, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputTextField from '../InputTextField/InputTextField';
import styles from '../FanForm/FanForm.module.css';
import { API_BASE_URL } from '../../config';
import { isEmail } from '../../helper';

function TalentForm(props) {
    const [formData, setFormData] = useState({});
    const [errorMessages, setErrorMessages] = useState({});
    const [finalMessages, setFinalMessage] = useState('');
    const inputOnChange = (e) => {
        const { target: { name, value } } = e;
        setFormData({ ...formData, [name]: value });
        setErrorMessages({ ...errorMessages, [name]: '' });
    }
    const submitFormAction = async () => {
        let url = API_BASE_URL+"sign-up/talent";
        let passFormData = {
            "first_name": formData.firstname,
            "last_name": formData.lastname,
            "username": formData.username,
            "email": formData.email,
            "password": formData.password
        };
        const response = await fetch(url, {
            method: 'POST',
            // mode: 'cors',
            // cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(passFormData)
        }).then((response) => {
            return response.json();
        }).then((res) => {
            console.log('res', res);
            setFinalMessage('Record Saved!');
        });
    }
    const validateForm = () => {
        let isvalid = true;
        let errMessages = { ...errorMessages };
        setFinalMessage('');
        if (formData.firstname && formData.firstname !== '') {
            errMessages = { ...errMessages, firstname: '' };
        } else {
            isvalid = false;
            errMessages = { ...errMessages, firstname: 'First Name is Required' };
        }

        if (formData.lastname && formData.lastname !== '') {
            errMessages = { ...errMessages, lastname: '' };
        } else {
            isvalid = false;
            errMessages = { ...errMessages, lastname: 'Last Name is Required' };
        }

        if (formData.username && formData.username !== '') {
            errMessages = { ...errMessages, username: '' };
        } else {
            isvalid = false;
            errMessages = { ...errMessages, username: 'Username is Required' };
        }
        if(!formData.email || formData.email === '') {
            isvalid = false;
            errMessages = { ...errMessages, email: 'Email is Required' };
        } else if(!isEmail(formData.email)){
            isvalid = false;
            errMessages = { ...errMessages, email: 'Invalid Email' };
        } else{
            errMessages = { ...errMessages, email: '' };
        }

        if (formData.password && formData.password !== '') {
            errMessages = { ...errMessages, password: '' };
        } else {
            isvalid = false;
            errMessages = { ...errMessages, password: 'Password is Required' };
        }

        if (isvalid) {
            submitFormAction();
        }
        setErrorMessages(errMessages);
    }
    return <div className={styles.FormWrap}>
        <Typography variant='h5' align="center" className={styles.formtitle}>Create Your Talent Account</Typography>
        <form className="FormWrapInner">
            <FormControl className={styles.formControl} variant="standard" fullWidth>
                <InputLabel className={styles.formControlLabel} shrink htmlFor="firstnamet">
                    First Name *
                </InputLabel>
                <InputTextField fullWidth defaultValue={formData.firstname} name="firstname" id="firstname" placeholder='First Name' onChange={inputOnChange} />
                {errorMessages?.firstname && errorMessages?.firstname !== '' ?
                    <FormHelperText error >{errorMessages?.firstname}</FormHelperText> : ''}
            </FormControl>
            <FormControl className={styles.formControl} variant="standard" fullWidth>
                <InputLabel className={styles.formControlLabel} shrink htmlFor="lastname">
                    Last Name *
                </InputLabel>
                <InputTextField fullWidth defaultValue={formData.lastname} name="lastname" id="lastname" placeholder='Last Name' onChange={inputOnChange} />
                {errorMessages?.lastname && errorMessages?.lastname !== '' ?
                    <FormHelperText error >{errorMessages?.lastname}</FormHelperText> : ''}
            </FormControl>
            <FormControl className={styles.formControl} variant="standard" fullWidth>
                <InputLabel className={styles.formControlLabel} shrink htmlFor="username">
                    Username *
                </InputLabel>
                <InputTextField fullWidth defaultValue={formData.username} name="username" id="username" placeholder='Username' onChange={inputOnChange} />
                {errorMessages?.username && errorMessages?.username !== '' ?
                    <FormHelperText error >{errorMessages?.username}</FormHelperText> : ''}
            </FormControl>
            <FormControl className={styles.formControl} variant="standard" fullWidth>
                <InputLabel className={styles.formControlLabel} shrink htmlFor="email">
                    Email *
                </InputLabel>
                <InputTextField fullWidth defaultValue={formData.email} name="email" id="email" placeholder='Email' type="email" onChange={inputOnChange} />
                {errorMessages?.email && errorMessages?.email !== '' ?
                    <FormHelperText error >{errorMessages?.email}</FormHelperText> : ''}
            </FormControl>
            <FormControl className={styles.formControl} variant="standard" fullWidth>
                <InputLabel className={styles.formControlLabel} shrink htmlFor="password">
                    Password *
                </InputLabel>
                <InputTextField fullWidth defaultValue={formData.password} name="password" id="password" placeholder='Password' type="password" onChange={inputOnChange} />
                {errorMessages?.password && errorMessages?.password !== '' ?
                    <FormHelperText error >{errorMessages?.password}</FormHelperText> : ''}
            </FormControl>
            <FormGroup align="center">
                <FormControlLabel control={<Checkbox color="success"  defaultChecked />} label={<>I agree to the <Link className={styles.link} href="#">Terms and Conditions</Link></>} />
            </FormGroup>

            <div className={styles.formControlButton}>
                <Button fullWidth={false} color='success' variant="contained" size="string" onClick={validateForm}>SIGN UP</Button>
            </div>
            {
                finalMessages !== '' && <p>{finalMessages}</p>
            }
        </form>
    </div>;
}

export default TalentForm;