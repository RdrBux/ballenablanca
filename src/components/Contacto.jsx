export default function Contacto() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );

  return (
    <section id="contacto" className="bg-zinc-900 pt-20 text-white">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-5xl font-semibold">CONTACTO</p>
            <p className="mt-4 text-zinc-300">
              Para consultas puede contactarse por cualquiera de los siguientes
              medios o completando el formulario.
            </p>
            <ul className="my-12 flex flex-col gap-6 px-4">
              <li>
                <a
                  className="flex items-center gap-4 hover:text-yellow-100"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon} contacto.primero
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 hover:text-yellow-100"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon} contacto.segundo
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 hover:text-yellow-100"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon} contacto.tercero
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 hover:text-yellow-100"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon} contacto.cuarto
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-16 lg:mt-4">
            <h4 className="text-center text-3xl font-semibold uppercase">
              Enviar un mensaje
            </h4>
            <form className="mt-8 grid gap-6 lg:px-12">
              <label>
                <p className="font-medium text-zinc-200">Nombre completo*</p>
                <input
                  className="mt-2 h-10 w-full rounded-lg bg-zinc-800 p-4"
                  type="text"
                  required
                />
              </label>
              <label>
                <p className="font-medium text-zinc-200">Correo electrónico*</p>
                <input
                  className="mt-2 h-10 w-full rounded-lg bg-zinc-800 p-4"
                  type="email"
                  required
                />
              </label>
              <label>
                <p className="font-medium text-zinc-200">Mensaje*</p>
                <textarea className="mt-2 w-full rounded-lg bg-zinc-800 p-4"></textarea>
              </label>
              <button className="rounded-lg bg-zinc-600 p-4">ENVIAR</button>
            </form>
          </div>
        </div>

        <hr className="mt-16 border-yellow-100" />
        <footer className="container flex flex-col items-center justify-center py-4 text-sm md:flex-row md:gap-2 lg:text-base">
          <p>Estudio Ballena Blanca © 2023.</p>
          <p>
            Elaborado por{' '}
            <a
              className="font-semibold duration-300 hover:text-yellow-300"
              href="https://rodriguezrodrigo.com"
            >
              RdrBux
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  );
}
