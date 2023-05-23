import Card from './Card';
import CardPhone from './CardPhone';

export default function ServiciosCards() {
  const cards = [
    {
      title: 'Título 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia, cum accusantium tempore porro molestiae repellat pariatur facilis? Minus accusamus incidunt libero aliquam voluptatibus nulla aspernatur animi blanditiis. Ducimus, repudiandae.',
    },
    {
      title: 'Título 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia, cum accusantium tempore porro molestiae repellat pariatur facilis? Minus accusamus incidunt libero aliquam voluptatibus nulla aspernatur animi blanditiis. Ducimus, repudiandae.',
    },
    {
      title: 'Título 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia, cum accusantium tempore porro molestiae repellat pariatur facilis? Minus accusamus incidunt libero aliquam voluptatibus nulla aspernatur animi blanditiis. Ducimus, repudiandae.',
    },
    {
      title: 'Título 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia, cum accusantium tempore porro molestiae repellat pariatur facilis? Minus accusamus incidunt libero aliquam voluptatibus nulla aspernatur animi blanditiis. Ducimus, repudiandae.',
    },
    {
      title: 'Título 5',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia, cum accusantium tempore porro molestiae repellat pariatur facilis? Minus accusamus incidunt libero aliquam voluptatibus nulla aspernatur animi blanditiis. Ducimus, repudiandae.',
    },
    {
      title: 'Título 6',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia, cum accusantium tempore porro molestiae repellat pariatur facilis? Minus accusamus incidunt libero aliquam voluptatibus nulla aspernatur animi blanditiis. Ducimus, repudiandae.',
    },
  ];

  const cardsDisplay = cards.map((card, index) => (
    <Card key={index} title={card.title} content={card.content} index={index} />
  ));

  const cardsPhone = cards.map((card, index) => (
    <CardPhone key={index} title={card.title} content={card.content} />
  ));

  return (
    <>
      <div className="my-16 grid gap-6 lg:hidden">{cardsPhone}</div>
      <div className="my-16 hidden gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-1">
        <div className="flex flex-col gap-6">
          {cardsDisplay[0]}
          {cardsDisplay[3]}
        </div>
        <div className="flex flex-col gap-6">
          {cardsDisplay[1]}
          {cardsDisplay[4]}
        </div>
        <div className="flex flex-col gap-6">
          {cardsDisplay[2]}
          {cardsDisplay[5]}
        </div>
      </div>
    </>
  );
}
