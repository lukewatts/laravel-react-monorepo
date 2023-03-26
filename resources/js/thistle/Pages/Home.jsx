import { HeroBullets } from "@/thistle/Components/Templates/HeroSection";
import { FeaturesGrid } from "@/thistle/Components/Templates/Features";
import {Container, Title} from "@mantine/core";
import {FooterLinks} from "@/thistle/Components/Templates/Footer";
import {HeaderMegaMenu} from "@/thistle/Components/Templates/Header";
import AuthContext from "@/thistle/Contexts/AuthContext";

const mockData = {
    footer: [{
        title: "About",
        links: [
            {
                label: "Features",
                link: "/"
            },
            {
                label: "Pricing",
                link: "/"
            },
            {
                label: "Support",
                link: "/"
            },
            {
                label: "Forums",
                link: "/"
            }
        ],
    }, {
        title: "Project",
        links: [
            {
                label: "Contribute",
                link: "/"
            },
            {
                label: "Media assets",
                link: "/"
            },
            {
                label: "Changelog",
                link: "/"
            },
            {
                label: "Releases",
                link: "/"
            }
        ],
    }, {
        title: "Community",
        links: [
            {
                label: "Join Discord",
                link: "/"
            },
            {
                label: "Follow on Twitter",
                link: "/"
            },
            {
                label: "Email newsletter",
                link: "/"
            },
            {
                label: "GitHub discussions",
                link: "/"
            }
        ]
    }]
};

export default ({auth}) => (
    <AuthContext.Provider value={auth}>
        <HeaderMegaMenu />
        <HeroBullets />
        <Container>
            <Title align={"center"} pt={"xl"}>Features</Title>
            <FeaturesGrid />
        </Container>
        <FooterLinks data={mockData.footer} />
    </AuthContext.Provider>
);
