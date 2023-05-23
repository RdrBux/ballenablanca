import FaqQuestion from './FaqQuestion';

export default function Faq() {
  const questions = [
    {
      question: 'Si se muere una pulga, ¿a dónde va?',
      answer: 'Al pulgatorio.',
    },
    {
      question: '¿Por qué las focas miran siempre hacia arriba?',
      answer: '¡Porque ahí están los focos!',
    },
    {
      question: '¿Qué le dice una iguana a su hermana gemela?',
      answer: 'Somos iguanitas.',
    },
    {
      question: '¿Cuál es el último animal que subió al arca de Noé?',
      answer: 'El del-fin.',
    },
  ];

  const questionsList = questions.map((question, index) => (
    <FaqQuestion
      key={index}
      question={question.question}
      answer={question.answer}
    />
  ));

  return (
    <div className="">
      <h3 className="text-4xl font-bold">Preguntas frecuentes</h3>
      <div className="mt-10">{questionsList}</div>
    </div>
  );
}
