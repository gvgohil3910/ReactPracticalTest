import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';

import { green } from '@mui/material/colors';

const InputTextField = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 22,
        position: 'relative',
        // backgroundColor: theme.palette.mode === 'light' ? green[500] : green[50],
        border: '2px solid #ced4da',
        borderColor: green[500],
        fontSize: 16,
        // width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        '&:focus': {
            // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.success.main,
        },
    },
}));


export default InputTextField;