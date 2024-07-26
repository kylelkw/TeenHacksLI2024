import { useEffect, useRef, useState } from "react";

export default function AnimatedLine({ className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    });
    return <hr ref={ref} className={`${className} ${visible ? "animate-aniamtedLine" : ""}`} />;
}
