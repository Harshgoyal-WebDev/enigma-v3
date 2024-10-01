/* eslint-disable react/no-unescaped-entities */
// Import necessary modules
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Define the component
export default function PortfolioSection() {
  // Create a ref for the root element
  const sectionRef = useRef(null);

  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window === 'undefined') return;

    const parentElement = sectionRef.current;
    if (!parentElement) return;

    // Select the portfolio section and its inner container
    const sectionPortfolio = parentElement.querySelector('.section-portfolio');
    if (!sectionPortfolio) return;

    const portfolioInner = sectionPortfolio.querySelector('.portfolio__inner');
    if (!portfolioInner) return;

    // Array to store ScrollTriggers for cleanup
    const scrollTriggers = [];

    // Animate the ellipse label if it exists
    const ellipseLabel = sectionPortfolio.querySelector('.ellipse-label');
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
    const portfolioCardsSection = sectionPortfolio.querySelector('.portfolio__cards');
    const cardsContainer = sectionPortfolio.querySelector('.cards');

    if (portfolioCardsSection && cardsContainer) {
      const cards = cardsContainer.querySelectorAll('.cards__card');
      const containerWidth = cardsContainer.getBoundingClientRect().width;

      // Create a GSAP timeline for the cards animation
      const cardsTimeline = gsap.timeline();

      // Initial animation for the cards container
      cardsTimeline.fromTo(
        cardsContainer,
        { x: window.innerWidth },
        {
          x: -(containerWidth - window.innerWidth / 3),
          ease: 'power0',
          duration: 5,
        }
      );

      let previousAngle = 1;

      // Use default values suitable for desktop
      const maxRotationAngle = 10;
      const maxXPercent = 15;
      const maxYPercent = 12;
      const easingOptions = [
        'power1.inOut',
        'power2.inOut',
        'power3.inOut',
        'power4.inOut',
        'power5.inOut',
        'power6.inOut',
      ];
      let lastUsedEase = '';

      // Animate each card except the last one
      Array.from(cards).slice(0, -1).forEach((card, index) => {
        // Select a random easing function different from the last one
        const availableEases = easingOptions.filter((ease) => ease !== lastUsedEase);
        lastUsedEase = availableEases[Math.floor(Math.random() * availableEases.length)];

        // Random angle for rotation
        const angle = -Math.sign(previousAngle) * Math.random() * maxRotationAngle;
        previousAngle = angle;

        // Random percentages for position
        const xPercent = maxXPercent / 2 + 0.5 * Math.random() * maxXPercent;
        const yPercent = (1 - 2 * Math.random()) * maxYPercent;

        // Set initial properties for each card
        card.setAttribute('data-angle', angle.toString());
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
        start: 'top bottom',
        end: 'bottom top',
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
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  };

    return (
        <>
        <div ref={sectionRef}>
            <section class="portfolio section-portfolio" data-v-d75bb3ed data-v-6dee63db>
                <div class="portfolio__inner"  data-v-6dee63db>
                    <div class="portfolio__cards" className='flex' data-v-6dee63db>
                        <div class="cards" data-v-6dee63db>
                            <div class="cards__card bg-red-500" data-v-6dee63db>
                                <article class="card" data-v-6dee63db data-v-fd58d880>
                                    <div class="card__inner" data-v-fd58d880>
                                        <header class="card__header" data-v-fd58d880>
                                            <p class="card__letter" data-v-fd58d880>M</p>
                                            {/* <picture class="card__photo" data-v-fd58d880> */}
                                                {/* <img src="/_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg" onerror="this.setAttribute(&#39;data-error&#39;, 1)" alt="Maxim" data-nuxt-img sizes="(max-width: 767px) 128px, (max-width: 1023px) 230px, (max-width: 1419px) 200px, (max-width: 1919px) 180px, 12vw" srcset="/_ipx/w_128&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 128w, /_ipx/w_180&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 180w, /_ipx/w_200&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 200w, /_ipx/w_230&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 230w, /_ipx/w_256&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 256w, /_ipx/w_307&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 307w, /_ipx/w_360&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 360w, /_ipx/w_400&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 400w, /_ipx/w_460&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 460w, /_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_photo_2023_04_20_09_35_06_0293eb0b8c.jpeg 614w" data-v-fd58d880 /> */}
                                            {/* </picture> */}
                                        </header>
                                        <div class="card__body" data-v-fd58d880>
                                            <p class="card__name h5" data-v-fd58d880>Maxim</p>
                                            <div class="card__text a1" data-v-fd58d880>
                                                <p>I practically use the language without much difficulty in my everyday life and on business trips. I no longer need to reach for a dictionary to look up specific words, although not all words are familiar, and not all constructions have been studied. The grammar, especially tenses, has become clear to me.</p>
                                            </div>
                                            <div class="card__button" data-v-fd58d880>
                                                <a href="/en/portfolio/maxim" class="button-link" data-v-fd58d880 data-v-cd2ee3f8>
                                                    <span class="button-template a1" data-v-cd2ee3f8 data-v-6432aaf5>
                                                        <span class="button-template__inner" data-v-6432aaf5>
                                                            <span class="button-template_part button-template_main" data-v-6432aaf5>more to read       </span>
                                                            <span class="button-template_part button-template_hover" data-v-6432aaf5>more to read       </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="cards__card bg-blue-500" data-v-6dee63db>
                                <article class="card" data-v-6dee63db data-v-fd58d880>
                                    <div class="card__inner" data-v-fd58d880>
                                        <header class="card__header" data-v-fd58d880>
                                            <p class="card__letter" data-v-fd58d880>E</p>
                                            {/* <picture class="card__photo" data-v-fd58d880>
                                                <img src="/_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg" onerror="this.setAttribute(&#39;data-error&#39;, 1)" alt="Ekaterina" data-nuxt-img sizes="(max-width: 767px) 128px, (max-width: 1023px) 230px, (max-width: 1419px) 200px, (max-width: 1919px) 180px, 12vw" srcset="/_ipx/w_128&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 128w, /_ipx/w_180&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 180w, /_ipx/w_200&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 200w, /_ipx/w_230&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 230w, /_ipx/w_256&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 256w, /_ipx/w_307&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 307w, /_ipx/w_360&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 360w, /_ipx/w_400&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 400w, /_ipx/w_460&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 460w, /_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 614w" data-v-fd58d880 />
                                            </picture> */}
                                        </header>
                                        <div class="card__body" data-v-fd58d880>
                                            <p class="card__name h5" data-v-fd58d880>Ekaterina</p>
                                            <div class="card__text a1" data-v-fd58d880>
                                                <p>
                                                    I have expanded my active vocabulary, significantly enriching both active and passive vocabulary.<br /> Success in mastering vocabulary and a significant amount of conversational practice have allowed me to speak fluently.<br />And I've started to take pride in myself<br />&nbsp;
                                                </p>
                                            </div>
                                            <div class="card__button" data-v-fd58d880>
                                                <a href="/en/portfolio/ekaterina-student" class="button-link" data-v-fd58d880 data-v-cd2ee3f8>
                                                    <span class="button-template a1" data-v-cd2ee3f8 data-v-6432aaf5>
                                                        <span class="button-template__inner" data-v-6432aaf5>
                                                            <span class="button-template_part button-template_main" data-v-6432aaf5>more to read       </span>
                                                            <span class="button-template_part button-template_hover" data-v-6432aaf5>more to read       </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="cards__card bg-green-500" data-v-6dee63db>
                                <article class="card" data-v-6dee63db data-v-fd58d880>
                                    <div class="card__inner" data-v-fd58d880>
                                        <header class="card__header" data-v-fd58d880>
                                            <p class="card__letter" data-v-fd58d880>E</p>
                                            {/* <picture class="card__photo" data-v-fd58d880>
                                                <img src="/_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg" onerror="this.setAttribute(&#39;data-error&#39;, 1)" alt="Ekaterina" data-nuxt-img sizes="(max-width: 767px) 128px, (max-width: 1023px) 230px, (max-width: 1419px) 200px, (max-width: 1919px) 180px, 12vw" srcset="/_ipx/w_128&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 128w, /_ipx/w_180&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 180w, /_ipx/w_200&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 200w, /_ipx/w_230&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 230w, /_ipx/w_256&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 256w, /_ipx/w_307&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 307w, /_ipx/w_360&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 360w, /_ipx/w_400&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 400w, /_ipx/w_460&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 460w, /_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 614w" data-v-fd58d880 />
                                            </picture> */}
                                        </header>
                                        <div class="card__body" data-v-fd58d880>
                                            <p class="card__name h5" data-v-fd58d880>Ekaterina</p>
                                            <div class="card__text a1" data-v-fd58d880>
                                                <p>
                                                    I have expanded my active vocabulary, significantly enriching both active and passive vocabulary.<br /> Success in mastering vocabulary and a significant amount of conversational practice have allowed me to speak fluently.<br />And I've started to take pride in myself<br />&nbsp;
                                                </p>
                                            </div>
                                            <div class="card__button" data-v-fd58d880>
                                                <a href="/en/portfolio/ekaterina-student" class="button-link" data-v-fd58d880 data-v-cd2ee3f8>
                                                    <span class="button-template a1" data-v-cd2ee3f8 data-v-6432aaf5>
                                                        <span class="button-template__inner" data-v-6432aaf5>
                                                            <span class="button-template_part button-template_main" data-v-6432aaf5>more to read       </span>
                                                            <span class="button-template_part button-template_hover" data-v-6432aaf5>more to read       </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="cards__card bg-yellow-500" data-v-6dee63db>
                                <article class="card" data-v-6dee63db data-v-fd58d880>
                                    <div class="card__inner" data-v-fd58d880>
                                        <header class="card__header" data-v-fd58d880>
                                            <p class="card__letter" data-v-fd58d880>E</p>
                                            {/* <picture class="card__photo" data-v-fd58d880>
                                                <img src="/_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg" onerror="this.setAttribute(&#39;data-error&#39;, 1)" alt="Ekaterina" data-nuxt-img sizes="(max-width: 767px) 128px, (max-width: 1023px) 230px, (max-width: 1419px) 200px, (max-width: 1919px) 180px, 12vw" srcset="/_ipx/w_128&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 128w, /_ipx/w_180&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 180w, /_ipx/w_200&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 200w, /_ipx/w_230&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 230w, /_ipx/w_256&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 256w, /_ipx/w_307&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 307w, /_ipx/w_360&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 360w, /_ipx/w_400&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 400w, /_ipx/w_460&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 460w, /_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_21_09_18_55_f98e34dc8c.jpg 614w" data-v-fd58d880 />
                                            </picture> */}
                                        </header>
                                        <div class="card__body" data-v-fd58d880>
                                            <p class="card__name h5" data-v-fd58d880>Ekaterina</p>
                                            <div class="card__text a1" data-v-fd58d880>
                                                <p>
                                                    I have expanded my active vocabulary, significantly enriching both active and passive vocabulary.<br /> Success in mastering vocabulary and a significant amount of conversational practice have allowed me to speak fluently.<br />And I've started to take pride in myself<br />&nbsp;
                                                </p>
                                            </div>
                                            <div class="card__button" data-v-fd58d880>
                                                <a href="/en/portfolio/ekaterina-student" class="button-link" data-v-fd58d880 data-v-cd2ee3f8>
                                                    <span class="button-template a1" data-v-cd2ee3f8 data-v-6432aaf5>
                                                        <span class="button-template__inner" data-v-6432aaf5>
                                                            <span class="button-template_part button-template_main" data-v-6432aaf5>more to read       </span>
                                                            <span class="button-template_part button-template_hover" data-v-6432aaf5>more to read       </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="cards__card bg-purple-400" data-v-6dee63db>
                                <article class="card" data-v-6dee63db data-v-fd58d880>
                                    <div class="card__inner" data-v-fd58d880>
                                        <header class="card__header" data-v-fd58d880>
                                            <p class="card__letter" data-v-fd58d880>A</p>
                                            {/* <picture class="card__photo" data-v-fd58d880>
                                                <img src="/_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg" onerror="this.setAttribute(&#39;data-error&#39;, 1)" alt="Alexandra" data-nuxt-img sizes="(max-width: 767px) 128px, (max-width: 1023px) 230px, (max-width: 1419px) 200px, (max-width: 1919px) 180px, 12vw" srcset="/_ipx/w_128&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 128w, /_ipx/w_180&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 180w, /_ipx/w_200&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 200w, /_ipx/w_230&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 230w, /_ipx/w_256&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 256w, /_ipx/w_307&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 307w, /_ipx/w_360&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 360w, /_ipx/w_400&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 400w, /_ipx/w_460&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 460w, /_ipx/w_614&amp;f_webp&amp;q_100/https://api.duck.school/uploads/small_IMAGE_2023_03_26_13_51_58_2db39185da.jpg 614w" data-v-fd58d880 />
                                            </picture> */}
                                        </header>
                                        <div class="card__body" data-v-fd58d880>
                                            <p class="card__name h5" data-v-fd58d880>Alexandra</p>
                                            <div class="card__text a1" data-v-fd58d880>
                                                <p>My main success is that I can speak! And I can speak easily. I've sorted out the mess of tenses in my head, and I easily initiate conversations in English. Overall, I feel much more confident.</p>
                                            </div>
                                            <div class="card__button" data-v-fd58d880>
                                                <a href="/en/portfolio/alexandra" class="button-link" data-v-fd58d880 data-v-cd2ee3f8>
                                                    <span class="button-template a1" data-v-cd2ee3f8 data-v-6432aaf5>
                                                        <span class="button-template__inner" data-v-6432aaf5>
                                                            <span class="button-template_part button-template_main" data-v-6432aaf5>more to read       </span>
                                                            <span class="button-template_part button-template_hover" data-v-6432aaf5>more to read       </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="cards__card bg-teal-500" data-v-6dee63db>
                                <div class="card" data-v-6dee63db data-v-f1fba100>
                                    <div class="card__eyes" data-v-f1fba100>
                                        <svg class="common-eyes" width="63" height="48" viewbox="0 0 63 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveaspectratio="xMidYMin meet" data-v-f1fba100 data-v-2b4800d0>
                                            <ellipse cx="14.9645" cy="23.8421" rx="14.9645" ry="23.8421" fill="white" data-v-2b4800d0></ellipse>
                                            <ellipse cx="14.9645" cy="23.8421" rx="5.22018" ry="5.588" fill="black" data-v-2b4800d0></ellipse>
                                            <ellipse cx="47.6774" cy="23.8421" rx="14.9645" ry="23.8421" fill="white" data-v-2b4800d0></ellipse>
                                            <ellipse cx="47.6774" cy="23.8421" rx="5.22018" ry="5.588" fill="black" data-v-2b4800d0></ellipse>
                                        </svg>
                                    </div>
                                    <p class="card__text h5" data-v-f1fba100>There are many more stories. Read on!</p>
                                    <div class="card__button" data-v-f1fba100>
                                        <a href="/en/portfolio" class="button-link" data-v-f1fba100 data-v-cd2ee3f8>
                                            <span class="button-template a1" data-v-cd2ee3f8 data-v-6432aaf5>
                                                <span class="button-template__inner" data-v-6432aaf5>
                                                    <span class="button-template_part button-template_main" data-v-6432aaf5>all stories       </span>
                                                    <span class="button-template_part button-template_hover" data-v-6432aaf5>all stories       </span>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}