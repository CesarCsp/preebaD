export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <p className="text-base font-medium text-slate-900 dark:text-slate-50">© 2025 Departamento de Informática Catastral e Inteligencia Fiscal</p>
            <div className="flex flex-wrap gap-x-2">
                <a
                    href="#"
                    className="link"
                >
                    Politica de Privacidad
                </a>
                <a
                    href="#"
                    className="link"
                >
                    Terminos de Servicio
                </a>
            </div>
        </footer>
    );
};
