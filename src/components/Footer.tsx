const Footer = () => {
  return (
    <div className="flex  gap-8 bg-gray-900 px-12 py-12">
      <div>
        <img src="https://www.construex.com.ec/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontruex-logo-grey.afc60847.png&w=256&q=75" />
      </div>
      <div className="flex w-full justify-between gap-16 px-48">
        <div className="flex flex-col">
          <h2 className="text-xl font-medium text-white">Nuestros Servicios</h2>
          <li className="text-white">Construex University</li>
          <li className="text-white">Construex Labs</li>
          <li className="text-white">Construex Concierge</li>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-medium text-white">Contáctanos</h2>
          <li className="text-white">Contacta a un asesor</li>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-medium text-white">Sobre nosotros</h2>
          <li className="text-white">Exhibidores</li>
          <li className="text-white">Términos y condiciones</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
