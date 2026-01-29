import { Typography } from "@mui/material";

export default function Footer() {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="flex flex-col justify-center flex-grow">
            <Typography style={{
                color: "#000000",
                alignSelf: 'center'
            }}>
                &copy; {currentYear} Joseph Evans
            </Typography>
            
        </div>
    )
}