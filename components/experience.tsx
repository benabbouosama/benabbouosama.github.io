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
                <h3 className="text-xl font-semibold">AI Engineer intern</h3>
                <div className="text-muted-foreground">Shiftbricks, June - September 2024</div>
              </div>
            </div>
            <div className="text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>Development of an AI conversational assistant based on a RAG framework, generating responses associated with references extracted from Moroccan legal documents.</li>
                <li>Implementation of advanced RAG techniques to generate search queries that accurately represent user intent, ensuring precise and relevant search results.</li>
                <li>Building a semantic search engine to search by meaning.</li>
                <li>Using the Factory design pattern to allow flexibility in changing language model (LLM) providers and databases, thereby ensuring code reusability and adaptability.</li>
                <li>Key features: personalized interaction via chatbot API, JWT authentication, search and navigation API.</li>
                <li>Admin Interface: Implementation of RBAC (Role-Based Access Control) for user and content management.</li>
                <li>DevOps: Grafana and Prometheus for performance monitoring and metric collection.</li>
                <li>Project management via Jira and Agile Scrum methodology.</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
