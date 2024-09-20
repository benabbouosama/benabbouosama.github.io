import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="experience">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 lg:grid-cols-1 lg:gap-12">
          <Card className="p-6 grid gap-4 border-2 border-black rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.5)] z-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <div className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Data and AI Engineer intern</h3>
                <div className="text-muted-foreground">Shiftbricks, July - September 2024</div>
              </div>
            </div>
            <div className="text-muted-foreground">
    This project focused on developing an AI conversational assistant using a RAG framework to generate responses with references from Moroccan legal documents. Advanced RAG techniques were applied to create accurate search queries, ensuring relevant results. The &quot;Factory&quot; design pattern enabled flexibility in switching between language model providers and databases, ensuring code reusability. Key features included chatbot API interactions, JWT authentication, and a search and navigation API. Role-based access control (RBAC) was implemented for user and content management. Performance monitoring and metric collection were handled using Grafana and Prometheus, with project management conducted via Jira and Agile Scrum.
</div>
</Card>
        </div>
      </div>
    </section>
  );
}
