import { ChangeInfoHandler } from "./FunctionInterfaces";


/******************* Interfaces for main state in App.tsx *****************/
export interface HeadingInfo {
    name: string,
    position: string,
    email: string,
    phone: string,
    github: string,
    linkedin: string
}


/******************** Interfaces for different forms ********************/
export interface HeadingInformationProps {
    handleHeadingInfoChange: ChangeInfoHandler
    heading: HeadingInfo
}


export interface UserInformationProps {
    handleHeadingInfoChange: ChangeInfoHandler
    heading: HeadingInfo
}

