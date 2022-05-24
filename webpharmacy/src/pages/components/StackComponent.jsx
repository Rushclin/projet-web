import { Add, ArrowBack } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StackComponent(props) {
    // Recuperation des props
    const { label, description, icon, route } = props

    // Declaration des HOOKS
    const navigate = useNavigate()

    return (
        <Stack direction="row" alignItems="center" justifyContent='space-between' mb={5}>
            <Typography variant='h5'>
                {description}
            </Typography>
            <Button variant='contained' onClick={() => { navigate(route) }} startIcon={icon ? <Add /> : <ArrowBack />}>
                {label}
            </Button>
        </Stack>
    )
}
