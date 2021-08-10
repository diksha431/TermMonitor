import React,{ Component, useState, useEffect} from "react";
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PeopleIcon from '@material-ui/icons/People';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';

export default function Monitor()
{
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
        Axios('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard')
        .then(response=>{
            setData(response.data)
        })
        .catch(error=>{
            console.error("error fetching data");
        })
    })
    
    return(
        <Box display="flex"  height={900} width={1225} style={{backgroundColor:"#eeeeee"}}> 
            <Box display="flex" height={900} width={240} style={{backgroundColor:"white"}}> 
                <Box  height={90}>
                    <Box p={3} >
                        <Avatar alt="A" src="l1.png" />
                    </Box>
                    <Box mt={-7} ml={9}>
                        <Typography variant="h6" style={{color:"#620262"}}>Term</Typography>
                    </Box>
                    <Box mt={-4} ml={14.6}>
                        <Typography variant="h6" style={{color:"#620262",fontWeight:"600"}}>Monitor</Typography>
                    </Box>
                </Box>
                <Box  height={60} ml={-23.9} mt={11} width={240} style={{backgroundColor:"#620262"}} >
                    <Box p={2}>
                        <HomeIcon style={{fontSize:"larger",color:"white"}}/>
                    </Box>
                    <Box p={2} mt={-7} ml={7}>
                        <Typography variant="p" style={{fontSize:"smaller",color:"white"}}>Add Keywords</Typography>
                    </Box>
                </Box>
                <Box  height={60} ml={-29} mt={18.5} width={239} >
                    <Box p={2}>
                        <PeopleIcon style={{fontSize:"larger",color:"lightslategrey"}}/>
                    </Box>
                    <Box p={2} mt={-7} ml={6}>
                        <Typography variant="p" style={{fontSize:"smaller",color:"lightslategrey"}} >Matches</Typography>
                    </Box>
                </Box>
                <Box  height={60} ml={-30} mt={26} width={239} >
                    <Box p={2}>
                        <CreditCardIcon style={{fontSize:"larger",color:"lightslategrey"}}/>
                    </Box>
                    <Box p={2} mt={-7} ml={6}>
                        <Typography variant="p" style={{fontSize:"smaller",color:"lightslategrey"}}>Manage sources</Typography>
                    </Box>
                </Box>
                <Box  height={60} ml={-30} mt={33} width={239} >
                    <Box p={2}>
                        <CreditCardIcon style={{fontSize:"larger",color:"lightslategrey"}}/>
                    </Box>
                    <Box p={2} mt={-7} ml={6}>
                        <Typography variant="p" style={{fontSize:"smaller",color:"lightslategrey"}}>Integration</Typography>
                    </Box>
                </Box>
                <Box  height={60} ml={-30} mt={40} width={239} >
                    <Box p={2}>
                        <CreditCardIcon style={{fontSize:"larger",color:"lightslategrey"}}/>
                    </Box>
                    <Box p={2} mt={-7} ml={6}>
                        <Typography variant="p" style={{fontSize:"smaller",color:"lightslategrey"}}>Alerts</Typography>
                    </Box>
                </Box>
                <Box  height={60} ml={-30} mt={48} width={239} >
                    <Box p={2}>
                        <StarIcon style={{fontSize:"larger",color:"lightslategrey"}}/>
                    </Box>
                    <Box p={2} mt={-7} ml={6}>
                        <Typography variant="p" style={{fontSize:"smaller",fontWeight:"500"}}>Settings</Typography>
                    </Box>
                    <Box p={2} mt={-6} ml={24}>
                        <ArrowDropDownIcon style={{fontSize:"larger",color:"lightslategrey"}}/>
                    </Box>
                </Box>
                <Box  height={60} ml={-30} mt={55} width={239} >
                    <Box p={2} ml={2}>
                        <Typography variant="p" style={{fontSize:"smaller",color:"lightslategrey"}}>Billings</Typography>
                    </Box>
                </Box>
                
                
                    
            </Box>
            
            <Box display="flex"  height={90} width={985} style={{backgroundColor:"#620262"}}> 
                <Box p={4} >
                    <Typography variant="h6" style={{color:"white"}}>KEYWORDS</Typography>
                </Box>
                <Box p={4} ml={45} >
                    <AppBar position="static" style={{backgroundColor:"white",height:"2rem",width:"20rem"}}>
                        <Typography variant="p" style={{color:"#620262",fontSize:"x-small",padding:"0.5rem",fontWeight:"bold",marginLeft:"15rem"}}>SUBMIT</Typography>
                        <ArrowForwardIcon style={{color:"black",fontSize:"small",marginLeft:"18.3rem",marginTop:"-1.28rem"}}/>
                    </AppBar>
                            
                </Box>
                <Box p={3.5} ml={-5}>
                    <Avatar alt="A" src="p1.jpeg" style={{color:"#620262",backgroundColor:"white"}}/>
                </Box>
                
            </Box>
            <Box display="flex"  height={125} width={870} ml={-115} mt={20}> 
                <Box >
                    <Typography variant="p" style={{fontWeight:"500"}}>Add Another Keyword</Typography>
                </Box>
                <Box mx={2}>
                    <Button variant="contained" style={{color:"white",backgroundColor:"#620262",height:"1.8em"}}>1/3</Button> 
                </Box>
                <Box mt={0.2}>
                    <Typography variant="p" style={{fontWeight:"500",fontSize:"smaller"}}>UPGRADE</Typography>
                </Box>
                <Box mt={0.2} ml={52}>
                    <Typography variant="p" style={{fontWeight:"500",fontSize:"smaller"}}>Advance search</Typography>
                </Box>
                <Box mt={5} ml={-103} width={850} height={80} style={{backgroundColor:"white"}}>
                    <Box p={3} >
                        <Box>
                            <AppBar position="static" style={{backgroundColor:"rgb(244 244 244)",height:"2rem",width:"41rem"}}>
                                <SearchIcon style={{color:"black",padding:"0.2rem"}} />
                                <Typography variant="p" style={{marginTop:"-1.6rem",marginLeft:"3rem",color:"black",fontSize:"small"}} >Enter your filters here</Typography>
                            </AppBar>
                        </Box>
                        <Box ml={84} mt={-4.3}>
                            <Button variant="contained" style={{color:"white",backgroundColor:"#620262"}}>save filter</Button> 
                        </Box>                    
                    </Box>
                </Box>                          
            </Box>
            <Box display="flex"  height={400} width={870} ml={-109} mt={46} > 
                <Box >
                    <Typography variant="p" style={{fontWeight:"500"}}>The terms you are tracking</Typography>
                </Box>
                <Box mt={0.2} ml={57}>
                    <Typography variant="p" style={{fontWeight:"500",fontSize:"smaller"}}>The data will refresh every 5 min</Typography>
                    <Box height={250} width={865} ml={-81} mt={0.5} style={{backgroundColor:"white"}}>
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell align="center" style={{fontWeight:"bold"}}>Keywords</TableCell>
                                        <TableCell align="center" style={{fontWeight:"bold"}}></TableCell>
                                        <TableCell align="center" style={{fontWeight:"bold"}}>Goal</TableCell>
                                        <TableCell align="center" style={{fontWeight:"bold"}}>Matches</TableCell>
                                        <TableCell align="center" style={{fontWeight:"bold"}}>Search Status</TableCell>
                                        <TableCell align="center" style={{fontWeight:"bold"}}>Delete keyword</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">
                                            Chair
                                        </TableCell>
                                        <TableCell align="center">
                                            <SearchIcon  />
                                        </TableCell>
                                        <TableCell align="center">
                                            Lead gen
                                        </TableCell>
                                        <TableCell align="center">
                                            6
                                        </TableCell>
                                        <TableCell align="center">
                                            Done
                                        </TableCell>
                                        <TableCell align="center">
                                            <DeleteIcon />
                                        </TableCell>        
                                     </TableRow>
                                </TableBody>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>        
                                     </TableRow>
                                </TableBody>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>        
                                     </TableRow>
                                </TableBody>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>        
                                     </TableRow>
                                </TableBody>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>
                                        <TableCell align="center">
                                        </TableCell>        
                                     </TableRow>
                                </TableBody>
                            
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box ml={-40} mt={4}>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#620262"}}
                
                        >view results</Button> 
                    </Box>       
                    
                </Box>
    
            </Box>
            
            
        </Box>
     
    );
}

