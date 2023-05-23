import Faq from './Faq';
import ServiciosCards from './ServiciosCards';

export default function Servicios() {
  return (
    <section id="servicios" className="container max-w-[1280px] pt-20 lg:pt-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold lg:text-8xl">SERVICIOS</h2>
        <p className="mt-4 text-lg font-medium lg:w-1/2">
          En Estudio Ballena Blanca nos especializamos en ... acá hay que poner
          una descripción muy breve y clara para mejorar el SEO.
        </p>
      </div>
      <ServiciosCards />

      <div className="mt-20">{<Faq />}</div>
    </section>
  );
}
