import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Quality Point verify product authenticity?",
      answer: "Quality Point verifies products by checking QR codes, barcodes, or serial numbers against our secure database maintained by manufacturers. Each product is registered by the manufacturer with unique identifiers that we validate in real-time."
    },
    {
      question: "Is the Quality Point app free to use?",
      answer: "Yes, the Quality Point app is completely free for consumers. Users can scan unlimited products and access all verification features at no cost."
    },
    {
      question: "What should I do if a product shows as counterfeit?",
      answer: "If a product is flagged as potentially counterfeit, don't use it and contact the manufacturer directly through our app. You can also report the issue to us, and we'll investigate. Always purchase from authorized retailers to avoid counterfeit products."
    },
    {
      question: "How can manufacturers join the Quality Point network?",
      answer: "Manufacturers can join by signing up for our manufacturer portal and integrating our API into their systems. We provide comprehensive documentation and support to help manufacturers register their products and maintain their verification database."
    },
    {
      question: "Does Quality Point work offline?",
      answer: "The app has limited offline functionality for previously scanned products, but real-time verification requires an internet connection to access our secure database. We recommend using the app with an active internet connection for the most accurate results."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Quality Point and product verification
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;