import React from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="bg-white text-black w-full">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-16 py-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-lg mb-6 text-gray-600">{description}</p>
          <Button href={ctaHref} className="bg-black text-white hover:bg-gray-800 transition-colors self-start">
            {ctaText}
          </Button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-w-4 aspect-h-3 md:aspect-w-1 md:aspect-h-1 h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-bl-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection