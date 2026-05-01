export const DEPARTMENTS = [
    'CS',
    'Math',
    'English'
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MOCK_SUBJECTS = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An introduction to the fundamental concepts of computer science.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Math",
        description: "Advanced study of integration, series, and polar coordinates.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG102",
        name: "English Literature",
        department: "English",
        description: "A survey of major works in English literature from the 18th century to the present.",
        createdAt: new Date().toISOString(),
    },
];