export const metadata = {
  title: "Faq - AI Course Creation CoPilot",
  description: "Create courses with AI",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      title: "When the software will be released?",
      text: "Currently in closed-alpha stage. Please contact to get access.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Let's talk about AI in EdTech"
              description="Here we provide answers for the most common questions. From registering and accessing your account to payments and paid subscriptions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
