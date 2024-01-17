import { Container, Grid, Link, Box, Divider, Typography } from '@mui/material';
// import { gridSpacing } from '../../../store/constant';
import { styled, useTheme } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import React, { CSSProperties } from 'react';
// import { useAuth, useGlobalConfig } from 'hooks/contextHooks';
import { Stack } from '@mui/system';
import Img from 'components/Img';
import { eDragonIcon, wcag21AAIcon } from 'constains/icons';

export interface FooterWrapperProps {
    children: React.ReactNode | string;
    sx: CSSProperties;
}

const FooterLink = styled(Link)({
    // border: '1px solid red',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '14px',
    // fontWeight: 400,
    textDecoration: 'none !important',
    opacity: '0.8',
    '& svg': {
        fontsize: '1.125rem',
        marginRight: 8
    },
    '&:hover': {
        opacity: '1'
    }
});

const FooterWrapper = ({ children, sx }: FooterWrapperProps) => (
    <Box component="div" sx={{ ...sx }}>
        {children}
    </Box>
);

const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isLoggedIn = false;
    // const { isLoggedIn } = useAuth();
    // const { globalVariable } = useGlobalConfig();
    const handleClick = (link: string) => {
        navigate(`${isLoggedIn ? '/user' : ''}/${link}`, { replace: true });
    };

    return (
        <>
            <FooterWrapper
                sx={{
                    padding: '30px 15px',
                    // color: theme.palette.common.black,
                    color: '#fff',
                    background: '#000',
                    fontSize: '50px',

                    [theme.breakpoints.down('lg')]: {
                        '& .topGrid': {
                            alignContent: 'flex-start',
                            alignItems: 'flex-start'
                        },
                        fontSize: '30px',
                        fontWeight: 700
                        //     '& .MuiDivider-root.divider': {
                        //         border: '1px solid red',
                        //         my: 0
                        //     },
                        //     '& .divider': {
                        //         border: '10px solid red',
                        //         width: '100%',
                        //         borderColor: '#000'
                        //     }
                    }
                    // [theme.breakpoints.up('lg')]: {
                    //     fontSize: '13px',
                    //     fontWeight: 400,
                    // '& .MuiDivider-root.divider': {
                    //     border: '1px solid red',intl
                    //     my: 0
                    // },
                    // '& .divider': {
                    // borderColor: '#fff',
                    // height: '1em',
                    // }
                    // },
                    // position: 'relative',
                    // marginBottom: 5
                    // border: '1px solid green'
                }}
            >
                {/* <Container> */}
                {/* <Grid
                        className="topGrid"
                        container
                        flexDirection={{ xs: 'column', lg: 'row' }}
                        alignItems="center"
                        spacing={gridSpacing}
                        sx={{ justifyContent: { xs: 'start', lg: 'flex-end' }, width: 'auto', paddingBottom: 4 }}
                    >
                        <Grid item sx={{ display: { xs: 'block', lg: 'none' } }}>
                            <FooterLink onClick={() => handleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <FormattedMessage id="footer.Disclaimer" />
                            </FooterLink>
                        </Grid>Icon = require("assets/icons/e-dragon.svg");
export const wcag21AandleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <FormattedMessage id="footer.copyright" />
                            </FooterLink>
                        </Grid>
                        <Divider orientation="vertical" flexItem className="divider" />

                        <Grid item>
                            <FooterLink onClick={() => handleClick('disclaimer')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <FormattedMessage id="footer.disclaimer" />
                            </FooterLink>
                        </Grid>
                        <Divider orientation="vertical" flexItem className="DIVIDERXYX divider" />

                        <Grid item>
                            <FooterLink onClick={() => handleClick('privacy-policy')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <FormattedMessage id="footer.privacy-policy" />
                            </FooterLink>
                        </Grid>
                        <Grid item sx={{ width: '60%', display: { xs: 'block', lg: 'none' } }}>
                            <Divider sx={{ borderColor: '#FFF' }} flexItem />
                        </Grid>
                    </Grid> */}
                <Box>
                    <Stack
                        sx={{
                            justifyContent: { xs: 'start', lg: 'flex-end' },
                            '& .disclaimer': {
                                display: { xs: 'block', lg: 'none' }
                            },
                            '& .vertical_line': {
                                display: { xs: 'none', lg: 'block' },
                                borderColor: '#fff',
                                height: '1em',
                                marginInline: 1
                            },
                            '& .horz_line': {
                                display: { xs: 'block', lg: 'none' },
                                borderColor: '#fff',                               width: '90%',
                                marginBlock: '20px',
                                margin: 'auto'
                            },
                            '& .footer_text': { padding: '.5rem', fontSize: '14px', fontWeight: 400 },
                        

                            [theme.breakpoints.down('lg')]: {
                                '& .footer_text': { fontSize: '13px', fontWeight: 400, marginLeft: '90px', padding: '.5rem 0' },
                                '& .disclaimer': { marginBottom: '2rem' }
                            }
                        }}
                        flexDirection={{ xs: 'column', lg: 'row' }}
                        alignItems="center"
                        className="topGrid"
                        // spacing={3}
                    >
                        <Typography className="footer_text disclaimer" onClick={() => {}}>
                            {/* <FormattedMessage id="footer.disclaimer" /> */}
                            disclaimer
                        </Typography>
                        <Divider sx={{ borderColor: '#fff' }} flexItem className="horz_line" />

                        <Typography className="footer_text" onClick={() => {}}>
                            {/* <FormattedMessage id="footer.sitemap" /> */}
                            sitemap
                        </Typography>

                        <Divider sx={{ borderColor: '#fff' }} orientation="vertical" flexItem className="vertical_line" />
                        <Typography className="footer_text" onClick={() => {}}>
                            {/* <FormattedMessage id="footer.importantNotices" /> */}
                            importantNotices
                        </Typography>
                        <Divider sx={{ borderColor: '#fff' }} orientation="vertical" flexItem className="vertical_line" />

                        <Typography className="footer_text" onClick={() => {}}>
                            {/* <FormattedMessage id="footer.privacyPolicy" /> */}
                            privacyPolicy
                        </Typography>
                        <Divider sx={{ borderColor: '#fff' }} flexItem className="horz_line" />
                    </Stack>

                    <Stack
                        sx={
                            {
                                // justifyContent: { xs: 'start', lg: 'flex-end' },
                                // '& .vertical_line': { borderColor: '#fff', height: '1em', marginInline: 1 },
                                // '& .footer_text': { fontSize: '14px', fontWeight: 400 },
                                // fontSize: '30px',
                                // [theme.breakpoints.down('lg')]: {
                                //     '& .footer_text': { fontSize: '13px', fontWeight: 400 }
                                // }
                            }
                        }
                        // flexDirection={{ xs: 'column', lg: 'row' }}
                        // alignItems="center"
                        // className="topGrid"
                        marginTop={3}
                    >
                        <Grid container alignItems="center" spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={6} lg={6}>
                                <FooterLink onClick={() => handleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                    <Img
                                        src={eDragonIcon}
                                        alt="icon"
                                        sx={{ height: 33, width: 91, verticalAlign: 'middle' }}
                                        onClick={() => {}}
                                    />
                                </FooterLink>
                                <FooterLink onClick={() => handleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                    <Img
                                        src={wcag21AAIcon}
                                        alt="icon"
                                        sx={{ height: 31, width: 88, verticalAlign: 'middle' }}
                                        onClick={() => {}}
                                    />
                                </FooterLink>
                            </Grid>
                            {/* <Grid item xs={3} lg={6}>
                                <FooterLink onClick={() => handleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                    <Img
                                        src={IconsData.wcag2_1AA_v1}
                                        alt="icon"intl
                                        sx={{ height: 31, width: 88, verticalAlign: 'middle' }}
                                        onClick={() => {}}
                                    />
                                </FooterLink>
                            </Grid> */}

                            <Grid item xs={12} lg={6}>
                                <FooterLink onClick={() => handleClick('disclaimer')} underline="hover" sx={{ cursor: 'pointer' }}>
                                    {/* <FormattedMessage id="© 2023 © Working Family and Student Financial Assistance Agency - Centralized e-Service Portal" /> */}
                                    © 2023 © Working Family and Student Financial Assistance Agency - Centralized e-Service Portal
                                </FooterLink>
                            </Grid>
                        </Grid>
                    </Stack>

                    {/* <Grid container alignItems="center" spacing={gridSpacing} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item>
                            <FooterLink onClick={() => handleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <Img
                                    src={IconsData.e_dragon}
                                    alt="icon"
                                    sx={{ height: 33, width: 91, verticalAlign: 'middle' }}
                                    onClick={() => {}}
                                />
                            </FooterLink>
                        </Grid>
                        <Grid item>
                            <FooterLink onClick={() => handleClick('copyright')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <Img
                                    src={IconsData.wcag2_1AA_v1}
                                    alt="icon"
                                    sx={{ height: 31, width: 88, verticalAlign: 'middle' }}
                                    onClick={() => {}}
                                />
                            </FooterLink>
                        </Grid>

                        <Grid item>
                            <FooterLink onClick={() => handleClick('disclaimer')} underline="hover" sx={{ cursor: 'pointer' }}>
                                <FormattedMessage id="© 2023 © Working Family and Student Financial Assistance Agency - Centralized e-Service Portal" />
                            </FooterLink>
                        </Grid>
                    </Grid> */}
                </Box>
                {/* </Container> */}
            </FooterWrapper>
        </>
    );
};

export const StyledStack = styled(Stack)(({ theme }) => ({
    padding: 16,
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: 20,
    gap: 16,
    textAlign: 'center',
    flexDirection: 'row',
    border: '1px red solid',
    '& .icon': {
        width: 97,
        height: 97,
        objectFit: 'contain',
        marginRight: 0
    },
    '& .guide_title': {
        fontSize: 20,
        fontWeight: 500,
        color: '#636366'
    },
    '& .guide_subtitle': {
        fontSize: 18
    },
    '& .guide_subject': {
        fontSize: 22,
        fontWeight: 600,
        color: '#636366'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: 8,
        gap: 8,
        '& .icon': {
            width: 24,
            height: 24,
            marginRight: 8
        },
        '& .guide_title': {
            fontSize: 12
        },
        '& .guide_subtitle': {
            fontSize: 6
        },
        '& .guide_subject': {
            fontSize: 8
        }
    }
}));

export default Footer;
