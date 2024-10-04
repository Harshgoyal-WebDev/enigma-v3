/* eslint-disable react/no-unescaped-entities */
// Import necessary modules
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Define the component
export default function PortfolioSection() {
  // Create a ref for the root element
  const sectionRef = useRef(null);

  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window === "undefined") return;

    const parentElement = sectionRef.current;
    if (!parentElement) return;

    // Select the portfolio section and its inner container
    const sectionPortfolio = parentElement.querySelector(".section-portfolio");
    if (!sectionPortfolio) return;

    const portfolioInner = sectionPortfolio.querySelector(".portfolio__inner");
    if (!portfolioInner) return;

    // Array to store ScrollTriggers for cleanup
    const scrollTriggers = [];

    // Animate the ellipse label if it exists
    const ellipseLabel = sectionPortfolio.querySelector(".ellipse-label");
    if (ellipseLabel) {
      // Define the animation for the ellipse label
      const ellipseAnimation = animateEllipseLabel(ellipseLabel);

      // Create a ScrollTrigger for the ellipse label
      const ellipseTrigger = ScrollTrigger.create({
        trigger: ellipseLabel,
        animation: ellipseAnimation,
      });

      scrollTriggers.push(ellipseTrigger);
    }

    // Animate the portfolio cards if they exist
    const portfolioCardsSection =
      sectionPortfolio.querySelector(".portfolio__cards");
    const cardsContainer = sectionPortfolio.querySelector(".cards");

    if (portfolioCardsSection && cardsContainer) {
      const cards = cardsContainer.querySelectorAll(".cards__card");
      const containerWidth = cardsContainer.getBoundingClientRect().width;

      // Create a GSAP timeline for the cards animation
      const cardsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
        },
      });

      // Initial animation for the cards container
      cardsTimeline.fromTo(
        cardsContainer,

        { x: window.innerWidth },
        {
          x: -(containerWidth - window.innerWidth / 3),
          ease: "power0",
          duration: 5,
        }
      );

      let previousAngle = 1;

      // Use default values suitable for desktop
      const maxRotationAngle = 10;
      const maxXPercent = 15;
      const maxYPercent = 12;
      const easingOptions = [
        "power1.inOut",
        "power2.inOut",
        "power3.inOut",
        "power4.inOut",
        "power5.inOut",
        "power6.inOut",
      ];
      let lastUsedEase = "";

      // Animate each card except the last one
      Array.from(cards)
        .slice(0, -1)
        .forEach((card, index) => {
          // Select a random easing function different from the last one
          const availableEases = easingOptions.filter(
            (ease) => ease !== lastUsedEase
          );
          lastUsedEase =
            availableEases[Math.floor(Math.random() * availableEases.length)];

          // Random angle for rotation
          const angle =
            -Math.sign(previousAngle) * Math.random() * maxRotationAngle;
          previousAngle = angle;

          // Random percentages for position
          const xPercent = maxXPercent / 2 + 0.5 * Math.random() * maxXPercent;
          const yPercent = (1 - 2 * Math.random()) * maxYPercent;

          // Set initial properties for each card
          card.setAttribute("data-angle", angle.toString());
          gsap.set(card, {
            rotate: angle,
            xPercent: xPercent * (index * 0.5 + 1),
            yPercent: yPercent,
          });

          // Add animation to the timeline
          cardsTimeline.to(
            card,
            {
              rotate: -angle,
              xPercent: -xPercent * (index * 0.5 + 1),
              yPercent: -yPercent,
              duration: 5,
              ease: lastUsedEase,
            },
            0
          );
        });

      // Create a ScrollTrigger for the cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: portfolioInner,
        endTrigger: sectionPortfolio,
        animation: cardsTimeline,
        scrub: 2,
        start: "top bottom",
        end: "bottom top",
      });

      scrollTriggers.push(cardsTrigger);
    }

    // Cleanup function to kill ScrollTriggers when component unmounts
    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  // Function to define the ellipse label animation
  const animateEllipseLabel = (element) => {
    // Return a GSAP animation for the ellipse label
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  };

  return (
    <>
      <div ref={sectionRef}>
        <section className="portfolio section-portfolio bg-secondary-color ">
          <div className="portfolio__inner">
            <div className="portfolio__cards">
              <div className="cards flex gap-[3vw]">
                <div className="w-[35vw] h-[30vw] rounded-[1vw] border test-card1 relative z-[2] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
                  <div className="w-full h-1/2 flex justify-between">
                    <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                      <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                      <p className="text-[1.2vw]">
                        Assistant Vice President, Cleartrip
                      </p>
                    </div>
                    <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                      <Image
                        src="/assets/home/testimonial-img.webp"
                        alt="testimonial-image"
                        className="object-cover w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                    <div className="w-[7vw] h-[10vw] relative">
                      <Image
                        src="/assets/home/quote-icon.webp"
                        alt="quote-icon"
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                    <p className="text-[1.1vw] font-light">
                      Hiveminds has a passionate team with sound knowledge of
                      business and technical skills. The agency displayed good
                      Execution skills that helped us improve our ROI and
                      deliver our business and spend goals.
                    </p>
                  </div>
                </div>
                <div className="w-[35vw] h-[30vw] rounded-[1vw] border test-card2 relative z-[3] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
                  <div className="w-full h-1/2 flex justify-between">
                    <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                      <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                      <p className="text-[1.2vw]">
                        Assistant Vice President, Cleartrip
                      </p>
                    </div>
                    <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                      <Image
                        src="/assets/home/testimonial-img.webp"
                        alt="testimonial-image"
                        className="object-cover w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                    <div className="w-[7vw] h-[10vw] relative">
                      <Image
                        src="/assets/home/quote-icon.webp"
                        alt="quote-icon"
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                    <p className="text-[1.1vw] font-light">
                      Hiveminds has a passionate team with sound knowledge of
                      business and technical skills. The agency displayed good
                      Execution skills that helped us improve our ROI and
                      deliver our business and spend goals.
                    </p>
                  </div>
                </div>
                <div className="w-[35vw] h-[30vw] rounded-[1vw] border test-card3 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
                  <div className="w-full h-1/2 flex justify-between">
                    <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                      <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                      <p className="text-[1.2vw]">
                        Assistant Vice President, Cleartrip
                      </p>
                    </div>
                    <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                      <Image
                        src="/assets/home/testimonial-img.webp"
                        alt="testimonial-image"
                        className="object-cover w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                    <div className="w-[7vw] h-[10vw] relative">
                      <Image
                        src="/assets/home/quote-icon.webp"
                        alt="quote-icon"
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                    <p className="text-[1.1vw] font-light">
                      Hiveminds has a passionate team with sound knowledge of
                      business and technical skills. The agency displayed good
                      Execution skills that helped us improve our ROI and
                      deliver our business and spend goals.
                    </p>
                  </div>
                </div>
                <div className="w-[35vw] h-[30vw] rounded-[1vw] border test-card4 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
                  <div className="w-full h-1/2 flex justify-between">
                    <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                      <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                      <p className="text-[1.2vw]">
                        Assistant Vice President, Cleartrip
                      </p>
                    </div>
                    <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                      <Image
                        src="/assets/home/testimonial-img.webp"
                        alt="testimonial-image"
                        className="object-cover w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                    <div className="w-[7vw] h-[10vw] relative">
                      <Image
                        src="/assets/home/quote-icon.webp"
                        alt="quote-icon"
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                    <p className="text-[1.1vw] font-light">
                      Hiveminds has a passionate team with sound knowledge of
                      business and technical skills. The agency displayed good
                      Execution skills that helped us improve our ROI and
                      deliver our business and spend goals.
                    </p>
                  </div>
                </div>
                <div className="w-[35vw] h-[30vw] rounded-[1vw] border test-card5 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
                  <div className="w-full h-1/2 flex justify-between">
                    <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                      <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                      <p className="text-[1.2vw]">
                        Assistant Vice President, Cleartrip
                      </p>
                    </div>
                    <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                      <Image
                        src="/assets/home/testimonial-img.webp"
                        alt="testimonial-image"
                        className="object-cover w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                    <div className="w-[7vw] h-[10vw] relative">
                      <Image
                        src="/assets/home/quote-icon.webp"
                        alt="quote-icon"
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                    <p className="text-[1.1vw] font-light">
                      Hiveminds has a passionate team with sound knowledge of
                      business and technical skills. The agency displayed good
                      Execution skills that helped us improve our ROI and
                      deliver our business and spend goals.
                    </p>
                  </div>
                </div>
                <div className="w-[35vw] h-[30vw] rounded-[1vw] border test-card6 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
                  <div className="w-full h-1/2 flex justify-between">
                    <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                      <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                      <p className="text-[1.2vw]">
                        Assistant Vice President, Cleartrip
                      </p>
                    </div>
                    <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                      <Image
                        src="/assets/home/testimonial-img.webp"
                        alt="testimonial-image"
                        className="object-cover w-full h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                    <div className="w-[7vw] h-[10vw] relative">
                      <Image
                        src="/assets/home/quote-icon.webp"
                        alt="quote-icon"
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                    <p className="text-[1.1vw] font-light">
                      Hiveminds has a passionate team with sound knowledge of
                      business and technical skills. The agency displayed good
                      Execution skills that helped us improve our ROI and
                      deliver our business and spend goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
           
    </>
  );
}
