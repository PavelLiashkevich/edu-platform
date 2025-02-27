import "./globals.css";
import {Navbar} from "@/shared/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div>
                    <header>
                        <h1>Образовательная платформа</h1>
                        <Navbar />
                    </header>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}