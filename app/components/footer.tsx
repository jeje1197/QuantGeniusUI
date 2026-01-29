export default function Footer() {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div>
            &copy; {currentYear} Joseph Evans
        </div>
    )
}