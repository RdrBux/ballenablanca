export default function Trabajos() {
  return (
    <section id="trabajos" className="container py-20 lg:py-32">
      <h2 className="text-center text-5xl font-bold lg:text-8xl">
        TRABAJOS
        <br />
        REALIZADOS
      </h2>

      <div className="my-16 grid gap-8 lg:grid-cols-2">
        <div className="select-none rounded-2xl bg-lime-200 p-8 hover:bg-lime-300">
          <div>
            <h3 className="text-4xl font-bold lg:text-6xl">DAFT PUNK</h3>
            <p className="text-zinc-700">Basicamente les hicimos todo.</p>
          </div>
          <div className="mt-4 grid gap-4">
            <iframe
              src="https://open.spotify.com/embed/track/5W3cjX2J3tjhG8zb6u0qHn?utm_source=generator&theme=0"
              className="rounded-xl"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/0DiWol3AO6WpXZgp0goxAV?utm_source=generator"
              className="rounded-xl"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="select-none rounded-2xl bg-blue-200 p-8 hover:bg-blue-300">
          <div>
            <h3 className="text-4xl font-bold lg:text-6xl">QUEEN</h3>
            <p className="text-zinc-700">
              Basicamente también les hicimos todo.
            </p>
          </div>
          <div className="mt-4">
            <iframe
              className="aspect-video w-full rounded-xl"
              /* width="560"
              height="315" */
              src="https://www.youtube.com/embed/a01QQZyl-_I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
