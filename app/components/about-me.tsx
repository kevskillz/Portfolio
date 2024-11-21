'use client';
import { useState, useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { allPages } from "contentlayer/generated";
import { notFound } from 'next/navigation';

export function AboutMe() {
  const [aboutMe, setAboutMe] = useState<string | null>(null);

  useEffect(() => {
    const pageContent = allPages.find(p => p.slug === 'about-me')?.body.html;
    if (!pageContent) notFound();
    setAboutMe(pageContent);
  }, []);

  return (
    <div className="pt-6">
      <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Hi, I'm {' '}
        <span className="text-primary-color-500 dark:text-primary-color-dark-500">Kevin</span>
        !
      </h1>
      {aboutMe && (
        <p
          className="pt-5 text-lg text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: aboutMe }}
        />
      )}
      <p className="pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300">
        Welcome to my portfolio/blog, where I share {' '}
        <RoughNotation
          animate={true}
          type="box"
          show={true}
          color="#DE1D8D"
          animationDelay={1000}
          animationDuration={2500}
        >
          my stories and projects.&nbsp;
        </RoughNotation>
      </p>
    </div>
  );
}
