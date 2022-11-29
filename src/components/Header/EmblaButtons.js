import Image from "next/image";
import React from "react";

export const PrevButton = ({ enabled, onClick }) => (
    <button
        className="embla__button embla__button--prev"
        onClick={onClick}
        disabled={!enabled}
    >
        <Image src="/arrow-right.png" alt="arrow right" width="48" height="48" />
    </button>
);

export const NextButton = ({ enabled, onClick }) => (
    <button
        className="embla__button embla__button--next"
        onClick={onClick}
        disabled={!enabled}
    >
        <Image src="/arrow-right.png" alt="arrow right" width="48" height="48" style={{ transform: "rotate(180deg)" }} />

    </button>
);
