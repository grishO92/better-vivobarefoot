'use client';

import Image from 'next/image';
import styles from './Carousel.module.css';
import { getCarousel } from '@/lib/shoes';
import { useCallback, useEffect, useRef, useState } from 'react';
import { pb } from '@/lib/pbConfig';

export default function Carousel(): JSX.Element {
  const timerRef: any = useRef(null);
  const [carousel, setCarousel] = useState(['']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect((): any => {
    let mounted: boolean = true;
    getCarousel().then((data) => {
      data.forEach((el) => {
        let a: string = pb.getFileUrl(el, el.field);
        setCarousel((state) => [...state, a]);
      });
    });
    carousel.shift();

    return () => (mounted = false);
  }, []);

  const slideLeft = () => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide
      ? carousel.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const slideRight = useCallback(() => {
    const isLastSlide: boolean = currentIndex === carousel.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, carousel]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      slideRight();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [slideRight]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <button onClick={slideLeft} className={styles.leftbtn}>
          ←
        </button>
        {carousel.map((_: string, i: number) => (
          <div key={i} className={styles.slide}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${carousel[currentIndex]})` }}
            />
          </div>
        ))}
        <button onClick={slideRight} className={styles.rightbtn}>
          →
        </button>
      </div>
    </div>
  );
}
