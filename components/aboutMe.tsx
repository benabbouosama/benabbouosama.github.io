import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { me } from "@/data";

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="about">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1 lg:gap-12">
        {/* Profile Card */}
        <Card className="p-8 shadow-lg hover:shadow-2xl hover:translate-y-[-4px] transition-all rounded-lg">
          <div className="flex lg:flex-row flex-col">
            {/* Left: Avatar and Name/Role */}
            <div className="flex items-center gap-6 lg:w-1/3">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-lg rounded-full overflow-hidden border-2 border-gray-300">
                <AvatarImage src={me[0].path} alt="Oussama's Profile Picture" className="object-cover w-full h-full" />
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold">BENABBOU Oussama</h3>
                <p className="text-muted-foreground text-xl">Data and AI Engineer</p>
              </div>
            </div>

            {/* Right: Introduction Paragraph */}
            <div className="text-muted-foreground text-lg leading-relaxed lg:w-2/3 space-y-4 mt-4 lg:mt-0">
              <p>
                Hi there! I’m Oussama, a final-year Data and AI Engineering student with a strong foundation in mathematics, statistics, and Object-Oriented Programming (OOP). I’m passionate about data science, artificial intelligence, and its applications.
              </p>
              <p>
                I aspire to make a lasting impact on the world through innovative solutions, positively influencing the lives of people globally. The journey is challenging, but I’m fully committed to pursuing this mission.
              </p>
            </div>
          </div>
        </Card>

        {/* Skills and Tools Section */}
        <Card className="p-8 grid gap-6 shadow-lg hover:shadow-2xl hover:translate-y-[-4px] transition-all rounded-lg">
          <h3 className="text-3xl font-bold">Skills and Tools</h3>
          <div className="grid grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h4 className="text-2xl font-bold">Skills</h4>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-3">
                <li>Data Structures and Algorithms</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Computer Vision</li>
                <li>Data Engineering</li>
                <li>Big Data Processing</li>
                <li>Data Analysis</li>
                <li>Backend Development</li>
                <li>Cloud Computing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold">Tools</h4>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-3">
                <li>Python, SQL, R, Java, PL/SQL, C</li>
                <li>TensorFlow, Keras, PyTorch, NLTK, spaCy, Pandas</li>
                <li>Apache Kafka, Apache Spark, Hadoop Ecosystem</li>
                <li>PostgreSQL, MongoDB, Cassandra, SQL Server, MySQL</li>
                <li>Docker, Kubernetes, Terraform</li>
                <li>Jira, GitLab, Git, Postman</li>
                <li>Google Cloud Platform (GCP), AWS</li>
                <li>Apache Airflow, dbt</li>
                <li>Spring MVC, Spring Boot, FastAPI, Django, Next.js</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
