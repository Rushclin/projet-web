import {
    Card,
    styled,
    alpha,
    Typography,
} from "@mui/material";
import CountUp from 'react-countup';
import Iconify from "../../../components/Iconify";

const IconStyle = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: "center",
    marginBottom: theme.spacing(3),
}));

const AppWidget = ({
    title,
    total,
    icon,
    color = "primary",
    sx,
    ...other
}) => {
/*     const getIcon = (name) => <Iconify icon={name} width={24} height={24} />;
 */    return (
        <Card
            sx={{
                py: 3,
                px: 2,
                boxShadow: 0,
                textAlign: "center",
                color: (theme) => theme.palette[color].darker,
                bgcolor: (theme) => theme.palette[color].lighter,
            }}
            {...other}
        >
            <IconStyle
                sx={{
                    color: (theme) => theme.palette[color].dark,
                    backgroundImage: (theme) =>
                        `linear-gradient(135deg, ${alpha(
                            theme.palette[color].dark,
                            0
                        )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
                }}
            >
                <Iconify icon={icon} width={24} height={24} />
            </IconStyle>
            <Typography variant="h3">
                <CountUp end={total} duration={5} delay={2} />

            </Typography>
            <Typography variant="subtitle2" style={{ opacity: "0.72" }}>
                {title}
            </Typography>
        </Card>
    )
}

export default AppWidget