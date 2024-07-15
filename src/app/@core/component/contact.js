'use client'

import { TextField, Grid, FormControl, Button, Typography } from '@mui/material';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLayoutEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import toast, { Toaster } from 'react-hot-toast';




export default function Contact() {

    const notify = (type, text) => {
        toast.dismiss();
        switch (type) {
            case 'success':
                toast.success(text);
                break;
            case 'error':
                toast.error(text);
                break;
            default:
                // You can either do something here for default case or just break
                break;
        }
    };



    const [formSubmitted, setFormSubmitted] = useState(false)
    const [loadded, setLoadded] = useState(false)

    useLayoutEffect(() => {
        const messageSent = localStorage?.getItem('messageSent')
        if (messageSent) {
            setFormSubmitted(true)
        }
        setLoadded(true)
    })




    const schema = yup.object().shape({
        Number: yup.string().required().typeError('Number is Required').min(10, 'Enter Accurate Number').max(11, 'Enter correct Number'),
        name: yup.string().required().label('Name is required'),
        email: yup.string().email().required().label('Email is required'),
        message: yup.string().required().label('Message is required')
    });




    const {  handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        // mode: onchange(),

    })
    const OnSubmit = async(values) => {

        

        const templateParams = {
            name: values?.name,
            number: values?.Number,
            email: values?.email,
            purpose: values?.purpose,
            message: values?.message,

        };


        await emailjs.send(process.env.serviceID, process.env.templateID, templateParams, process.env.publicKey,).then(
            (response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setFormSubmitted(true)
                notify('success', 'Thank You For Being Connected')
                localStorage?.setItem('messageSent', true)
            },
            (error) => {
                notify('error', 'Something went wrong')
            },
        );




    }


    if (!loadded) {
        return null;
    }


    return (
        <div className="container ">
            <Toaster />
            <p className="sectionHeading fs-xll roboto-regular ">Contact Me</p>
            <div className="skillsContainer container  mt-0">

                {formSubmitted ? <div className='contactMessage flex-column gap-3 d-flex justify-content-center align-items-center'>
                    <div className='checkCircle d-flex justify-content-center align-items-center '>
                        <Icon icon="iconamoon:check" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-column gap-0'>
                        <p className='fs-lgg fw-500 p-0 m-0 txt-center capitalize'>Thank you for being connected </p>
                        <p className='fs-smm fw-500 p-0 m-0 txt-center'>You have already sent a message earlier</p>
                    </div>

                </div> : <div className="d-flex flex-column justify-conent-center align-items-center pt-5 pb-5 p-2 gap-3">
                    <div>
                        <p className='m-0 p-0 mb-3 fs-lgg fw-500 '>Enter your details and I will get back to you soon !</p>
                    </div>
                    <form autoComplete='off' onSubmit={handleSubmit(OnSubmit)} className='w-100' >
                        <Grid container spacing={4}>

                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl fullWidth>
                                    <Controller
                                        control={control}
                                        name="name"
                                        render={({ field: { onChange, value } }) => {

                                            return (

                                                <TextField fullWidth id="outlined-basic" label="Enter Your Name" variant="outlined" onChange={onChange} value={value} error={errors?.name ? true : false} />
                                            )
                                        }}
                                    />
                                    <Typography variant='subtitle2' color={'error'} className='ps-2'>{errors?.name ? errors?.name?.message : ''} </Typography>


                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl fullWidth>
                                    <Controller
                                        control={control}
                                        name="email"
                                        render={({ field: { onChange, value } }) => (
                                            <TextField fullWidth id="outlined-basic" label="Enter Your Email *" variant="outlined" onChange={onChange} value={value} error={errors?.email ? true : false} />
                                        )}
                                    />
                                    <Typography variant='subtitle2' color={'error'} className='ps-2'>{errors?.email ? errors?.email?.message : ''} </Typography>


                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl fullWidth>
                                    <Controller
                                        control={control}
                                        name="Number"
                                        render={({ field: { onChange, value } }) => (
                                            <TextField fullWidth id="outlined-basic" label="Enter Your Number *" variant="outlined" onChange={onChange} value={value} error={errors?.Number ? true : false} type='number' />
                                        )}
                                    />
                                    <Typography variant='subtitle2' color={'error'} className='ps-2'>{errors?.Number ? errors?.Number?.message : ''} </Typography>

                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl fullWidth>
                                    <Controller
                                        control={control}
                                        name="purpose"
                                        render={({ field: { onChange, value } }) => (
                                            <TextField fullWidth id="outlined-basic" label="Purpose" variant="outlined" onChange={onChange} value={value} />
                                        )}
                                    />
                                    <Typography variant='subtitle2' color={'error'} className='ps-2'>{errors?.purpose ? errors?.purpose?.message : ''} </Typography>


                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FormControl fullWidth>
                                    <Controller
                                        control={control}
                                        name="message"
                                        render={({ field: { onChange, value, } }) => (
                                            <TextField fullWidth id="outlined-basic" label="Enter Your Message" multiline={true} rows={4} variant="outlined" onChange={onChange} value={value} error={errors?.message ? true : false} />
                                        )}
                                    />
                                    <Typography variant='subtitle2' color={'error'} className='ps-2'>{errors?.message ? errors?.message?.message : ''} </Typography>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                                <Button size='large' variant='contained' color='error' type='submit'>
                                    Submit

                                </Button>
                                <Button size='large' variant='outlined' color='secondary' onClick={() => {
                                    // console.log(
                                    //     ''
                                    // )
                                }} >
                                    Cancel

                                </Button>

                            </Grid>



                        </Grid>
                    </form>


                </div>}


            </div>


        </div>
    )
}