import React from 'react';
import SimpleReactFooter from "simple-react-footer";

const Footer = () => {
    const description = "Shakhawat Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.";
    const title = "Shakhawat Healthcare";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "Contact",
                    link: "/contact"
                },
                
                {
                    name: "Services",
                    link: "/service"
                },
                
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
     ];
    return (
        <div>
            <h1 className="text-center text-primary mt-5">About Us !</h1>
            <SimpleReactFooter 
                description={description} 
                title={title}
                columns={columns}
                linkedin=""
                facebook=""
                twitter=""
                instagram=""
                youtube=""
                pinterest=""
                copyright="black"
                iconColor="black"
                backgroundColor="bisque"
                fontColor="black"
                copyrightColor="darkgrey"
            />;
        </div>
    );
};

export default Footer;