interface CoursePageProps {
    params: { id: string };
}

export default function CoursePage({ params }: CoursePageProps) {
    return <h1>Курс {params.id}</h1>;
}