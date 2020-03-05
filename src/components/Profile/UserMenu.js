import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';

const UserMenu = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Previous orders
                    </Typography>
                    <Divider/>
                </CardContent>
            </Card>
        </div>
    );
}

export default UserMenu;