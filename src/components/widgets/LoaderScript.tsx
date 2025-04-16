import { useEffect } from "react";
import { gsap } from "gsap";

export default function LoaderScript() {
  useEffect(() => {
    const loader = document.querySelector(".load-screen");
    if (!loader) return;

    loader.classList.replace("hidden", "block");

    const counter3 = document.querySelector(".counter-3");
    setTimeout(() => document.querySelector("html")!.dataset.load = "true", 1000);

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j.toString();
        counter3?.appendChild(div);
      }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3?.appendChild(finalDiv);

    function animate(counter: Element | null, duration: number, delay = 0) {
      if (!counter) return;
      const numHeight = counter.querySelector(".num")?.clientHeight || 0;
      const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration,
        delay,
        ease: "power2.inOut",
      });
    }

    animate(counter3, 1.65);
    animate(document.querySelector(".counter-2"), 2);
    animate(document.querySelector(".counter-1"), 1.5, 0.5);

    gsap.to(".digit", {
      top: "-150px",
      stagger: { amount: 0.25 },
      delay: 4,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".loader", {
      opacity: 100,
      width: 0,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      scale: 40,
      duration: 0.5,
      delay: 1.5,
      ease: "power2.inOut",
    });

    gsap.to(".load-screen", {
      opacity: 0,
      duration: 0.25,
      delay: 1.5,
      ease: "power2.inOut",
      onComplete: () => loader.remove(),
    });
  }, []);

  return null;
}
