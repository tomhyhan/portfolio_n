
export type SkillTypes = {
    "Programming Languages": {
        image: string;
        tag: string;
    }[];
    frameworks: {
        image: string;
        tag: string;
    }[];
    devOps: {
        image: string;
        tag: string;
    }[];
}

export const skillTypes : SkillTypes = {
    "Programming Languages": [{image: "rust1", tag: "Rust" },
                        {image: "typescript", tag: "Typescript" },
                        {image: "javascript", tag: "Javascript" },
                        {image: "python", tag: "Python" }],
    frameworks: [{image: "react1", tag: "React" },
                {image: "next", tag: "Nextjs" },
                {image: "angular", tag: "Angular" }],
    devOps: [{image: "aws", tag: "AWS / Cloud" },
                {image: "docker", tag: "Containers" }],
}