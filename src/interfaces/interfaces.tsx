import type { ReactNode } from "react";

export interface Case {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
}

export interface Service {
    icon: ReactNode;
    title: string;
    abstract: string,
    // description: string[];
}

export interface Testimonial {
    text: string;
    client: string;
    picture: string;
}

export interface QuestionsFaq {
    question: string;
    answer: string;
}

export interface Client {
    picture: string;
    title: string;
}