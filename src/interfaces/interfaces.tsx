import type { ReactNode } from "react";

export interface Case {
    title: string;
    client: string;
    challenge: string;
    soluction: string;
    results: string[];
}

export interface Service {
    icon: ReactNode;
    title: string;
    abstract: string,
    // description: string[];
}