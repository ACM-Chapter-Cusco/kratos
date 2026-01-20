"use client";
import { useState, useEffect, useRef } from "react";
import style from "./Hero.module.css";
import { motion } from "framer-motion";

const HeroText = () => {
  const phrases = [
    "competitive programming",
    "web development",
    "artificial intelligence",
    "Chapter.Cusco",
  ];

  // States for each part of the animation
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");
  const [displayText, setDisplayText] = useState("");

  // State to control the animation phase (0-5)
  // Phase 0: Initial state, no cursor
  // Phase 1: Animation of "ACM {"
  // Phase 2: Animation of "Chapter.Cusco"
  // Phase 3: Animation of "UNSAAC }"
  // Phase 4: Deletion of "Chapter.Cusco"
  // Phase 5: Phrase rotation
  const [animationPhase, setAnimationPhase] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const sleepTimeRef = useRef(100);
  const currentPhraseRef = useRef(phrases[0]);

  // Effect to start the animation after a brief delay
  useEffect(() => {
    if (animationPhase !== 0) return;

    const timer = setTimeout(() => {
      setAnimationPhase(1);
    }, 2500); // Wait 1 second before starting the animation

    return () => clearTimeout(timer);
  }, [animationPhase]);

  // Effect for the first phase: "ACM {"
  useEffect(() => {
    if (animationPhase !== 1) return;

    const fullText = "ACM {";
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeEffect = async () => {
      if (firstText.length < fullText.length) {
        setFirstText(fullText.substring(0, firstText.length + 1));
        await sleep(100);
      } else {
        // Move to the next phase after completion
        await sleep(300);
        setAnimationPhase(2);
      }
    };

    const timer = setTimeout(typeEffect, 100);
    return () => clearTimeout(timer);
  }, [firstText, animationPhase]);

  // Effect for the second phase: "Chapter.Cusco"
  useEffect(() => {
    if (animationPhase !== 2) return;

    const fullText = "Chapter.Cusco";
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeEffect = async () => {
      if (secondText.length < fullText.length) {
        setSecondText(fullText.substring(0, secondText.length + 1));
        await sleep(100);
      } else {
        // Move to the next phase after completion
        await sleep(300);
        setAnimationPhase(3);
      }
    };

    const timer = setTimeout(typeEffect, 100);
    return () => clearTimeout(timer);
  }, [secondText, animationPhase]);

  // Effect for the third phase: "UNSAAC }"
  useEffect(() => {
    if (animationPhase !== 3) return;

    const fullText = "UNSAAC }";
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeEffect = async () => {
      if (thirdText.length < fullText.length) {
        setThirdText(fullText.substring(0, thirdText.length + 1));
        await sleep(100);
      } else {
        // Move to the next phase after completion
        await sleep(800);
        setAnimationPhase(4); // Move to deletion phase
      }
    };

    const timer = setTimeout(typeEffect, 100);
    return () => clearTimeout(timer);
  }, [thirdText, animationPhase]);

  // Effect for the fourth phase: Delete "Chapter.Cusco"
  useEffect(() => {
    if (animationPhase !== 4) return;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const deleteEffect = async () => {
      if (secondText.length > 0) {
        setSecondText(secondText.substring(0, secondText.length - 1));
        await sleep(75); // A bit faster than typing
      } else {
        // When everything is deleted, move to the rotation phase
        await sleep(300);
        setAnimationPhase(5);
      }
    };

    const timer = setTimeout(deleteEffect, 100);
    return () => clearTimeout(timer);
  }, [secondText, animationPhase]);

  // Effect for the fifth phase: phrase rotation
  useEffect(() => {
    if (animationPhase !== 5) return;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeEffect = async () => {
      const currentPhrase = phrases[phraseIndex];
      currentPhraseRef.current = currentPhrase;

      if (isDeleting) {
        // If we're deleting text
        if (displayText.length === 0) {
          // When everything is deleted, change to the next text
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          // Wait a bit longer before starting to type the next phrase
          await sleep(sleepTimeRef.current * 5);
        } else {
          // Continue deleting letter by letter
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          await sleep(sleepTimeRef.current);
        }
      } else {
        // If we're typing text
        if (displayText.length === currentPhrase.length) {
          // Text completely typed, wait before starting to delete
          setIsDeleting(true);
          await sleep(sleepTimeRef.current * 10);
        } else {
          // Continue adding letter by letter
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
          await sleep(sleepTimeRef.current);
        }
      }
    };

    // Start the effect
    const timer = setTimeout(typeEffect, 150);

    // Clean up the timeout when unmounting or updating
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, animationPhase]);

  return (
    <motion.div className="flex w-[14rem] flex-col max-md:h-[10.2rem] md:w-[27rem] lg:gap-y-3 xl:w-[30rem]">
      <motion.h2
        layout
        className="text-blue font-sans text-5xl font-extrabold md:text-7xl xl:text-8xl"
      >
        {firstText}
        {animationPhase === 1 && (
          <span className={`${style.animate_blink} text-blue`}>|</span>
        )}
      </motion.h2>
      <h2 className="text-white-blue text-3xl leading-tight font-extrabold md:text-6xl xl:text-[65px]">
        {animationPhase < 5 ? secondText : displayText}
        {(animationPhase === 2 ||
          animationPhase === 4 ||
          animationPhase === 5) && (
          <span className={`${style.animate_blink} text-blue`}>|</span>
        )}
      </h2>
      <div className="flex w-full justify-end">
        <motion.h2
          layout
          className="font-Play text-white-blue flex items-center text-xl leading-10 max-md:w-[6.7rem] md:w-[10rem] md:text-3xl xl:w-[13rem] xl:text-[40px] xl:leading-16"
        >
          {thirdText}
          {animationPhase === 3 && (
            <span
              className={`${style.animate_blink} text-blue font-[3000] max-md:text-3xl xl:text-6xl`}
            >
              |
            </span>
          )}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default HeroText;
