'use client'
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide, Grid } from '@mui/material';
import { Icon } from '@iconify/react';
import { TextField, FormControl, Button, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';



export default function HireDailog({ isOpen, toggle, formSubmitted, formIsSubmitted }) {

    // const Transition = React.forwardRef(function(props, ref){
    //     return <Slide direction="up" ref={ref} {...props} />;
    // });
    
    
    
    function notify(type, text) {
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



    const schema = yup.object().shape({
        Number: yup.string().required().typeError('Number is Required').min(10, 'Enter Accurate Number').max(11, 'Enter correct Number'),
        name: yup.string().required().label('Name '),
        purpose: yup.string().required().label('Purpose '),
        email: yup.string().email().required().label('Email '),
        message: yup.string().required().label('Message ')
    });




    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        // mode: onchange(),

    })
    const OnSubmit = (values) => {
     

      

        const templateParams = {
            name: values?.name,
            number: values?.Number,
            email: values?.email,
            purpose: values?.purpose,
            message: values?.message,
        };

         
          
        emailjs.send(process.env.serviceID, process.env.templateID, templateParams, process.env.publicKey,).then(
            (response) => {
                // console.log('SUCCESS!', response.status, response.text);
                formIsSubmitted()
                notify('success', 'Thank You For Being Connected')
                setTimeout(handleClose, 2000)
                localStorage?.setItem('hireme', true)
            },
            (error) => {
                // console.log(error , '---------------------------------')
              
                notify('error', 'Something went wrong')
            },
        );

    }




    const handleClose = () => {
        toggle()
        reset()

    };

    return (
        <React.Fragment>

            <Dialog
                open={isOpen}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Grid container spacing={0}>
                    <Grid item xs={11} sm={11} lg={11} xl={11}>
                        <DialogTitle>{"Hire me by fill the form "}</DialogTitle>

                    </Grid>
                    <Grid item xs={1} sm={1} lg={1} xl={1} className='d-flex justify-content-center align-items-start pt-2'>
                        <button className='border-0 fs-lgg closeButton' onClick={handleClose}><Icon icon="fontisto:close" /></button>

                    </Grid>

                </Grid>


                {
                    formSubmitted ? <div className='contactMessage flex-column gap-3 d-flex justify-content-center align-items-center'>
                        <div className='checkCircle d-flex justify-content-center align-items-center '>
                            <Icon icon="iconamoon:check" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column gap-0'>
                            <p className='fs-lgg fw-500 p-0 m-0 txt-center capitalize px-2'>Thank you, I will get back to you soon</p>
                            <p className='fs-smm fw-500 p-0 m-0 txt-center'>You have already fill the form  earlier</p>
                        </div>

                    </div> : <form autoComplete='off' onSubmit={handleSubmit(OnSubmit)} className='w-100' >

                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <Grid container spacing={2}>
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
                                            <InputLabel id="demo-simple-select-label" error={errors?.purpose ? true : false} >Project Type</InputLabel>
                                            <Controller
                                                control={control}
                                                name="purpose"
                                                render={({ field: { onChange, value } }) => (

                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={value}
                                                        label="Project Type"
                                                        onChange={onChange}
                                                        error={errors?.purpose ? true : false}
                                                    >
                                                        <MenuItem value={'landing page'}>Landing Page</MenuItem>
                                                        <MenuItem value={'informativeWeb'}>Informative web</MenuItem>
                                                        <MenuItem value={'4-5 page website'}>4-5 Page website</MenuItem>
                                                        <MenuItem value={'webapp'}>Web App</MenuItem>

                                                    </Select>



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
                                                    <TextField fullWidth id="outlined-basic" label="Enter Project Description" multiline={true} rows={4} variant="outlined" onChange={onChange} value={value} error={errors?.message ? true : false} />
                                                )}
                                            />
                                            <Typography variant='subtitle2' color={'error'} className='ps-2'>{errors?.message ? errors?.message?.message : ''} </Typography>
                                        </FormControl>
                                    </Grid>


                                </Grid>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='outlined' color='secondary' onClick={handleClose}>Cancel</Button>
                            <Button variant='contained' color='error' type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                }


            </Dialog>
        </React.Fragment>
    );
}