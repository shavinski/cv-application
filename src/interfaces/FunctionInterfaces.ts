import React from "react";

export interface ChangeInfoHandler {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ChangeSkillsHandler {
    (skillsCategory: string, newSkill: string[]): void;
}
