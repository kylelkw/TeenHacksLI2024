import { useEffect, useRef } from "react";

interface Props {
    darkModeUrl: string;
    lightModeUrl: string;
    className?: string;
    loading?: "eager" | "lazy";
    alt?: string;
}

export default function ThemedImage({ darkModeUrl, lightModeUrl, alt, className, loading = "lazy" }: Props) {
    const ref = useRef(null);
    useEffect(() => {
        const updateImage = () => {
            const theme = document.documentElement.dataset.theme;
            const src = theme === "dark" ? darkModeUrl : lightModeUrl;
            ref.current.src = src;
        };

        const observer = new MutationObserver((mutations) => {
            if (mutations.filter((m) => m.attributeName === "data-theme").length > 0) {
                updateImage();
            }
        });
        observer.observe(document.documentElement, { attributes: true });

        updateImage();
    });
    return <img className={className} loading={loading} alt={alt} ref={ref} />;
}
