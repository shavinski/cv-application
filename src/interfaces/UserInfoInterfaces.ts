import { ChangeInfoHandler } from "./FunctionInterfaces";

export interface HeadingInfo {
    name: string,
    position: string,
    email: string,
    phone: string,
    github: string,
    linkedin: string
}

// export interface UserInformationProps {
//     handleHeadingInfoChange: ChangeInfoHandler
//     heading: HeadingInfo
// }

export interface FormDropdownGeneric<TInfo, THandleChange> {
    ComponentForm: React.ComponentType<{ info: TInfo, handleInfoChange: THandleChange }>;
    handleInfoChange: THandleChange;
    info: TInfo;
    title: string;
}