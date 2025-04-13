import FAQItem from "./FAQItem";

const questionsItems = [
  {
    id: 1,
    question: "How can I contact Inkyy Team?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com. We typically respond within 24 hours.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "We offer web design, branding, UI/UX design, and custom web development services tailored to your business needs.",
  },
  {
    id: 3,
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer ongoing website maintenance plans to ensure your site remains secure, fast, and up-to-date.",
  },
  {
    id: 4,
    question: "How long does it take to design and develop a website?",
    answer:
      "The timeline depends on the complexity of the project. Most websites take between 3 to 6 weeks to complete.",
  },
  {
    id: 5,
    question: "Do you require a deposit for projects?",
    answer:
      "Yes, we require a 50% deposit before we begin any project to secure your spot in our schedule.",
  },
];

const FAQSection = () => {
  return (
    <section className="max-w-[60.5rem] w-full mx-auto px-[1rem]  py-[8rem]">
      <h2 className="text-[2.5rem] font-[800] text-white-blue font-Opensans text-center mb-[4rem] text-white">
        Preguntas <span className="text-blue">Frecuentes</span>
      </h2>

      {questionsItems.map((item) => (
        <FAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default FAQSection;