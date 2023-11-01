import React from "react";

export interface ChangeInfoHandler {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}
