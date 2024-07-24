export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Implementation of GPT from scratch",
      des: "Implementing self-attention mechanisms, multi-head attention, and exploring the intricacies of transformer architecture.",
      img: "/Tarchi.png",
      iconLists: ["/pytorch-icon.svg"],
      link: "https://medium.com/@benabbou.osama/implementation-of-gpt-from-scratch-797c6940c9a8",
    },
    {
      id: 2,
      title: "Real-Time Vehicle Tracking System",
      des: "Implementation of a Real-Time Vehicle Tracking System using Kafka, ZooKeeper, Spark, Google Cloud Platform (GCS), BigQuery, Mage, Terraform, dbt, Docker, and Looker Studio. Follow this guide to set up and run the project to monitor and analyze vehicle data in real-time.",
      img: "/Architecture.png",
      iconLists: ["/google_cloud-icon.svg","/kafka.svg", "/apache_zookeeper-icon.svg", "/apache-spark-5.svg", "/terraform-svgrepo-com.svg", "/dbt-seeklogo.svg" , "/docker-svgrepo-com.svg"],
      link: "https://github.com/benabbouosama/Real-Time-Vehicle-Tracking-System",
    },
    {
      id: 3,
      title: "Forecasting Wikipedia Page Views: An Exploration of Web Traffic Prediction Strategies",
      des: "Constructing a forecasting model for predicting future traffic on Wikipedia pages where we try to explore two different approaches for prediction.",
      img: "/ML prj.jpg",
      iconLists: ["/Keras.svg", "/tensorflow-icon.svg", "/scikit-learn.svg"],
      link: "https://github.com/benabbouosama/Forecasting-Wikipedia-Page-Views",
    },
    {
      id: 4,
      title: "BERT-based Text Classification REST API",
      des: "This project is a FastAPI-based RESTful API for text classification using a fine-tuned BERT model and Cassandra database integration.",
      img: "/BERT_prj.png",
      iconLists: ["/fastapi-1.svg", "/apache_cassandra-icon.svg", "/pytorch-icon.svg", "/scikit-learn.svg", "/docker-svgrepo-com.svg"],
      link: "https://github.com/benabbouosama/BERT-based-Text-Classification-REST-API",
    },
  ];
  

  
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/benabbouosama",
    name: "GitHub", 
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://medium.com/@benabbou.osama",
    name: "Medium", 
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/oussama-benabbou-3a54531b9/",
    name: "LinkedIn", 
  },
];