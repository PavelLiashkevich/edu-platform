type Props = { params: { id: string } };

export default function CoursePage({ params }: Props) {
    return <h1>Курс: {params.id}</h1>;
}