import { Typography } from "@mui/material";

function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright @"}
            SWJ, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}
export default Copyright;