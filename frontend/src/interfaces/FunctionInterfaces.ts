import React from "react";

export interface ChangeInfoHandler {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ChangeSkillsHandler {
    (newSkill: string): void;
}
