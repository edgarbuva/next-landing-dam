import React from 'react'
import HeroSection from '@/components/organisms/HeroSection'

/* const Home: React.FC = () => (
  <div className="container mx-auto px-4">
    <HeroSection />
    <NewCollectionSection />
    <BestFashionSection />
    ## Añadir más secciones según sea necesario
  </div>
) */

export default function Home() {

  const handleShopNowClick = () => {
    // Implementar la lógica de navegación o acción del botón
    console.log('Shop Now clicked')
  }
  return (
    <div className="w-full">
      <HeroSection 
        title="Find The Best Fashion Style For You"
        description="Discover the latest trends and styles that suit your personality. Our curated collection brings you the best in fashion."
        ctaText="SHOP NOW"
        ctaHref="/shop"
        imageSrc="/hero-image.jpg"
        imageAlt="Woman in fashionable summer outfit"
      />

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Hero</h2>
        {/* Contenido de New Collection */}
      </section>
      
      {/* Placeholder para las demás secciones */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">New Collection</h2>
        {/* Contenido de New Collection */}
      </section>
      
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Best Fashion Since 2014</h2>
        {/* Contenido de Best Fashion Since 2014 */}
      </section>
      
      {/* Añade más secciones según sea necesario */}
    </div>
  );
}
