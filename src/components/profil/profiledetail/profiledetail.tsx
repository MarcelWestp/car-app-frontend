import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import User from './../../../models/User'

const portrait: string = "https://cdn.pixabay.com/photo/2016/03/27/07/26/darth-vader-1282288_1280.jpg"

const Profiledetail = ({ user }: { user: User }) => {
    return (
        <div className="profiledetail">
            <Box sx={{ marginTop: 2, marginLeft: 5}}>
                <Avatar alt="Mustermann" src={portrait} sx={{ width: 128, height: 128 }} />
                <Box sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    marginTop: 2
                }}>
                    <p>Username: </p>
                    <p>{user.username}</p>
                    <p>Firstname:</p>
                    <p>{user.firstName}</p>
                    <p>Lastname:</p>
                    <p>{user.lastName}</p>
                    <p>Email:</p>
                    <p>{user.email}</p>
                    <p>Birthdate:</p>
                    <p>{user.dob.toLocaleString().substring(0, 10)}</p>
                    <p>Adress:</p>
                    <p>{user.address.street} {user.address.nr}</p>
                    <p>City:</p>
                    <p>{user.address.zip} {user.address.city}</p>
                </Box>
            </Box>
        </div>
    )
}

export default Profiledetail