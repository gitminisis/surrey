import { useState, useEffect } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';


import MainCard from '../../components/MainCard';
// assets
import {
    GiftOutlined, LoginOutlined,
    ProfileOutlined,
    FileOutlined,
    FileSearchOutlined,
    HomeOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    DatabaseOutlined,
    FlagOutlined
} from '@ant-design/icons';
import DetailFieldsTable from './DetailFieldsTable';
import { getStatusReport } from '../../utils/statistics';






// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {


    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const [statusReport, setStatusReport] = useState(null);
    useEffect(() => {
        getStatusReport().then(res => {
            setStatusReport(res)
        })
    }, [])
    console.log(statusReport)
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>

            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
         
            {statusReport && <Grid item xs={12}> <div dangerouslySetInnerHTML={{ __html: statusReport }}></div></Grid>}
            {/* row 2 */}
          

            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Detail Fields List</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <DetailFieldsTable />
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Update Front Pages</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List
                        component="nav"
                        sx={{
                            px: 0,
                            py: 0,
                            '& .MuiListItemButton-root': {
                                py: 1.5,
                                '& .MuiAvatar-root': avatarSX,
                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                            }
                        }}
                    >
                        <ListItemButton divider onClick={_ => window.location = '/admin/page/union-home'}>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <HomeOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Union Home Page</Typography>} secondary="" />

                        </ListItemButton>
                        <ListItemButton divider onClick={_ => window.location = '/admin/page/description-home'}>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <FileOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Archives Home Page</Typography>} secondary="" />

                        </ListItemButton>
                        <ListItemButton divider onClick={_ => window.location = '/admin/page/collections-home'}>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <FileSearchOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Artifact Home Page</Typography>} secondary="" />

                        </ListItemButton>
                        <ListItemButton divider onClick={_ => window.location = '/admin/page/faq'} >
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <QuestionCircleOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">FAQ Page</Typography>} secondary="" />

                        </ListItemButton>

                    </List>
                </MainCard>
                <MainCard sx={{ mt: 2 }}>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack>
                                    <Typography variant="h5" noWrap>
                                        Site Maintenance Message
                                    </Typography>

                                </Stack>
                            </Grid>
                        </Grid>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }} component="a" href="/admin/site-announcement">
                            Update announcement
                        </Button>
                    </Stack>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
