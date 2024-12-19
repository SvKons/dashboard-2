import { useState } from 'react';

interface SlidesProps {
    slides: React.ReactNode[];
    onLastSlide: () => void;
}

const Slides = ({ slides, onLastSlide }: SlidesProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        if (currentSlide === slides.length - 1) {
            onLastSlide();
        }
    };

    return (
        <div className="slides">
            {slides[currentSlide]}
            <button className="slides__button" onClick={goToPreviousSlide} disabled={slides.length <= 1}>
                Previous
            </button>
            <button className="slides__button" onClick={goToNextSlide} disabled={slides.length <= 1}>
                Next
            </button>
        </div>
    );
};

export default Slides;
