import { ChangeHeadingInfoHandler } from "./FunctionInterfaces";

export interface HeadingInfo {
    name: string,
    position: string,
    email: string,
    phone: string,
    github: string,
    linkedin: string
}

export interface UserInformationProps {
    handleHeadingInfoChange: ChangeHeadingInfoHandler;
    heading: HeadingInfo
}
