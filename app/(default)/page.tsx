export const metadata = {
  title: "heyTrain - AI Course Creation CoPilot",
  description: "Create courses with AI",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="From Concept to Course in Minutes"
            description="Your AI-powered course creation companion that transforms ideas into world-class learning experiences in minutes, not months."
            // title="The software that sparks your imagination"
            // description="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
          >
            Course Copilot v1 <span className="mx-1 text-gray-300">·</span>{" "}
            Coming Soon
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
