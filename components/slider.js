import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import {useState} from 'react'

import PlanetCard from "./planet-card";
import styles from '../styles/Slider.module.scss'

export default function Slider({data}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
        slidesPerView: 1,
        spacing: 15,
        breakpoints: {
            '(min-width: 1200px)': {
                slidesPerView: 3
            }
        }
    })

    return (
        <div className={styles.wrapper}>
            <div ref={sliderRef} className="keen-slider">
                {data.map((planet) => (
                    <div className={'keen-slider__slide'}>
                        <PlanetCard key={planet.name} planet={planet}/>
                    </div>
                ))}
            </div>
            {slider && (
                <div className={styles.dots}>
                    {[...Array(slider.details().size).keys()].map((id) => {
                        return (
                            <button
                                key={id}
                                onClick={() => slider.moveToSlideRelative(id)}
                                className={styles.dot + (currentSlide === id ? ` ${styles.active}` : "")}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
