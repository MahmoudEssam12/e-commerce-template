import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { PrevButton, NextButton } from "./EmblaButtons";
import EmblaSlideContent from "./EmblaSlideContent";

function Header() {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      loop: true,
      direction: "rtl",
    },
    []
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);
  return (
    <header className="embla-header-wrapper">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src="/images/background-1.png" alt="background" fill />
            <EmblaSlideContent />
          </div>
          <div className="embla__slide">
            <Image src="/images/background-2.jpg" alt="background" fill />
            <EmblaSlideContent />
          </div>
          <div className="embla__slide">
            <Image src="/images/background-3.jpg" alt="background" fill />
            <EmblaSlideContent />
          </div>
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </header>
  );
}

export default Header;
