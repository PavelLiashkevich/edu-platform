import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="p-4 bg-gray-800 text-white">
            <ul className="flex gap-4">
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/courses">Курсы</Link></li>
                <li><Link href="/profile">Профиль</Link></li>
                <li><Link href="/auth">Авторизация</Link></li>

            </ul>
        </nav>
    );
};