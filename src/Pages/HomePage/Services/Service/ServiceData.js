import diagnosis from "../../../../images/services/Diagnosis.jpg";
import MinorProcedures from "../../../../images/services/minor-procedures.jpg";
import OrthopedicCare from "../../../../images/services/orthopedic.jpg";
import physiotherapy from "../../../../images/services/Physiotherapy.jpg";
import PrimaryCare from "../../../../images/services/primary-care.png";
import SpecialtyMedicine from "../../../../images/services/specialty-medicine.jpg";
import specializedSupport from "../../../../images/services/specilized-support.jpg";
import VirtualVisits from "../../../../images/services/virtual-visits.jpg";

  const servicesData = [
    
    {
        id:1,
        name:"Minor Procedures",
        image:MinorProcedures,
        describe:"Minor surgical procedures are those that are minimally invasive. In most cases, these are performed laparoscopically or arthroscopically. Small incisions are made that allow surgical tools and a small camera to be inserted into the body. ",
    },
    {
        id:2,
        name:"Virtual Visits",
        image:VirtualVisits,
        describe:"Doctors Care Anywhere is a virtual urgent care platform that allows new and existing patients to see one of our qualified providers from a phone, tablet",
    },
    {
        id:3,
        name:"Primary Care",
        image:PrimaryCare,
        describe:"A primary care physician (PCP) is a physician who provides both the first contact for a person with an undiagnosed health concern as well as continuing care of varied medical conditions, not limited by cause, organ system, or diagnosis. ",
    },
    
    {
        id:4,
        name:"Diagnosis & investigation",
        image:diagnosis,
        describe:"Medical diagnosis is the process of determining which disease or condition explains a person's symptoms and signs. It is most often referred to as diagnosis",
    },
    
    {
        id:5,
        name:"Specialty Medicine",
        image:SpecialtyMedicine,
        describe:"Quincy Medical Group has over 150 providers in over 30 medical specialties.",
    },
    {
        id:6,
        name:"Orthopedic Care",
        image:OrthopedicCare,
        describe:"Whichever sport or activity you choose, injuries can happen. Quincy Medical Group???s Sports Injury Clinic & QMG Ortho Now is here to get you back to your active lifestyle.",
    },{
        id:7,
        name:"Physiotherapy",
        image: physiotherapy,
        describe:"Physical therapy, also known as physiotherapy, is one of the allied health professions. It is provided by physical therapists who promote, maintain, or restore health through physical examination, diagnosis,",
    },
    {
        id:8,
        name:"Specialized support",
        image:specializedSupport,
        describe:"These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art technology",
    },
]

export { servicesData };

