import { ChangeInfoHandler, ChangeSkillsHandler } from "./FunctionInterfaces";


/******************* Interfaces for main state in App.tsx *****************/
export interface HeadingInfo {
    name: string,
    position: string,
    email: string,
    phone: string,
    github: string,
    linkedin: string
}

export interface SkillsInfo {
    'Languages': string[],
    'Libraries': string[],
    'Frameworks/Tools': string[]
}

/******************** Interfaces for different forms ********************/
export interface HeadingFormProps {
    handleHeadingInfoChange: ChangeInfoHandler
    heading: HeadingInfo
}

export interface SkillsFormProps {
    handleSkillsInfoChange: ChangeSkillsHandler
    skills: SkillsInfo
}


export interface UserInformationProps {
    handleHeadingInfoChange: ChangeInfoHandler
    heading: HeadingInfo
    handleSkillsInfoChange: ChangeSkillsHandler
    skills: SkillsInfo
}

