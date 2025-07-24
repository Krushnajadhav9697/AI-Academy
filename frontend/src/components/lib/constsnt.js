import course_img from "../../assets/images/ai-academy_img1.jpg";

export const courseData = [
  {
    id: 1,
    title: "Data Engineering",
    type: "Specialization",
    description:
      "Build strong foundations in data engineering by working on real-life projects, from ETL pipelines to designing scalable data warehouses.",
    image: course_img,
    collaborators: [
      { name: "AI-Academy", logo: openai },
      { name: "AWS", logo: AWS },
    ],
  },
  {
    id: 2,
    title: "AI Python for Beginners",
    type: "Short Course",
    description:
      "This course introduces Python for AI, covering the basics of data structures, libraries like NumPy and Pandas, and building your first AI models.",
    image: course_img,
    collaboratorName: "OpenAI",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
    ],
  },

  {
    id: 3,
    title: "Generative AI for Software Development",
    type: "Specialization",
    description:
      "Master the tools and techniques for integrating generative AI into software projects. Learn about LLMs, prompt engineering, and practical deployments.",
    image: course_img,
    collaboratorName: "Meta",
    collaboratorLogo: openai,
  },
  {
    id: 4,
    title: "DSPy: Build and Optimize Agentic Apps",
    type: "Short Course",
    description:
      "Dive deep into DSPy to build and optimize agentic applications. From architecture to deployment, get hands-on with powerful AI workflows.",
    image: course_img,
    collaboratorName: "AI-Academy",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction 2nd",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
    ],
  },
  {
    id: 5,
    title: "Orchestrating Workflows for GenAI Applications",
    type: "Course",
    description:
      "Understand and implement orchestration patterns for GenAI applications. Work with modern tools to create robust and scalable AI workflows.",
    image: course_img,
    collaboratorName: "Stanford Online",
    collaboratorLogo: openai,
  },
  {
    id: 6,
    title: "Getting Structured LLM Output",
    type: "Specialization",
    description:
      "Learn how to design prompts and integrate APIs to ensure structured outputs from large language models for your projects.",
    image: course_img,
    collaboratorName: "Hugging Face",
    collaboratorLogo: huggingface,
  },

  // 🆕 Additional courses
  {
    id: 7,
    title: "Advanced Prompt Engineering",
    type: "Short Course",
    description:
      "Explore advanced techniques in prompt engineering and design effective AI workflows.",
    image: course_img,
    collaboratorName: "OpenAI",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction 2nd",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
    ],
  },
  {
    id: 8,
    title: "AI for Business Leaders",
    type: "Course",
    description:
      "Equip yourself with the knowledge to leverage AI in strategic business decisions.",
    image: course_img,
    collaboratorName: "AWS",
    collaboratorLogo: AWS,
  },
  {
    id: 9,
    title: "Machine Learning Foundations",
    type: "Specialization",
    description:
      "Cover machine learning basics, including supervised and unsupervised learning techniques.",
    image: course_img,
    collaboratorName: "Meta",
    collaboratorLogo: openai,
  },
  {
    id: 10,
    title: "Full Stack AI Applications",
    type: "Short Course",
    description:
      "Learn how to integrate AI into full stack applications with React and Django.",
    image: course_img,
    collaboratorName: "AI-Academy",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
  },
];

// collab logos

import AIForGoodlab from "../../assets/collab-logos/collab-AI-for-good-lab.png";
import AWS from "../../assets/collab-logos/collab-AWS.png";
import Cohere from "../../assets/collab-logos/collab-Cohere.png";
import coursera from "../../assets/collab-logos/collab-coursera.png";
import Google_Cloud from "../../assets/collab-logos/collab-Google_Cloud.png";
import huggingface from "../../assets/collab-logos/collab-huggingface.webp";
import Lamini from "../../assets/collab-logos/collab-Lamini.png";
import langchain from "../../assets/collab-logos/collab-langchain.png";
import microsoft from "../../assets/collab-logos/collab-microsoft.webp";
import openai from "../../assets/collab-logos/collab-openai.png";
import stanford from "../../assets/collab-logos/collab-stanford.webp";
import weights from "../../assets/collab-logos/collab-weights.png";
import Google from "../../assets/collab-logos/collab-Google.png";

export const collabLogos = [
  AIForGoodlab,
  AWS,
  Cohere,
  coursera,
  Google_Cloud,
  huggingface,
  Lamini,
  langchain,
  microsoft,
  openai,
  stanford,
  weights,
  Google,
];

//sidebar

export const topics = [
  "Agents",
  "AI Frameworks",
  "AI in Software Development",
  "AI Safety",
  "Anomaly Detection",
  "Chatbots",
  "Compression and Quantization",
  "Computer Vision",
  "Data Engineering",
  "Data Processing",
  "Deep Learning",
  "Diffusion Models",
  "Document Processing",
  "Embeddings",
  "Evaluation and Monitoring",
  "Event-Driven AI",
  "Fine-Tuning",
  "GenAI Applications",
  "Generative Models",
  "LLM Serving",
  "LLMOps",
  "Machine Learning",
  "Mathematical Foundations",
  "MLOps",
  "MultiModal",
  "NLP",
  "On-Device AI",
  "Prompt Engineering",
  "RAG",
  "Search and Retrieval",
  "Supervised Learning",
  "Synthetic Data",
  "Task Automation",
  "Time Series",
  "Transformers",
  "Unsupervised Learning",
  "Vector Databases",
];

export const collaborators = [
  "AGI Inc",
  "AI Dungeon",
  "AI21 labs",
  "Anthropic",
  "Arize AI",
  "Astronomer",
  "AWS",
  "Chroma",
  "CircleCI",
  'Co-authors of "Hands-On Large Language Models"',
  "Cohere",
  "Comet",
  "crewAI",
  "Databricks",
  "DeepLearning.AI",
  "DotTxt",
  "Flower Labs",
  "Giskard",
  "Google",
  "Google Cloud",
  "GuardrailsAI",
  "Haystack",
  "Hugging Face",
  "IBM Research's BeeAI",
  "Intel",
  "Lamini",
  "LangChain",
  "Letta",
  "Livekit, RealAvatar",
  "LlamaIndex",
  "Meta",
  "Microsoft",
  "Mistral AI",
  "MongoDB",
  "Neo4j",
  "NexusFlow",
  "OpenAI",
  "Penn State University",
  "Pinecone",
  "Predibase",
  "Qdrant",
  "Qualcomm",
  "Replit",
  "Stanford Online",
  "StatQuest",
  "Tavily",
  "Together AI",
  "TruEra",
  "University of Washington",
  "Unstructured",
  "Upstage",
  "Vectara",
  "Weaviate",
  "Weights and Biases",
  "WhyLabs",
  "Windsurf",
];

//my learning

export const coursesYouMightLike = [
  {
    id: 1,
    title: "Post-training of LLMs",
    type: "Short Course · 1 hour 16 mins",
    description:
      "Adapt LLMs for specific tasks and behaviors using post-training.",
    image: course_img,
    collaborators: [
      {
        name: "University of Washington",
        logo: AWS,
      },
      {
        name: "NexusFlow",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 2,
    title: "ACP: Agent Communication Protocol",
    type: "Short Course · 1 hour 41 mins",
    description:
      "Learn how autonomous agents communicate effectively and securely.",
    image: course_img,
    collaborators: [
      {
        name: "IBM Research's BeeAI",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 3,
    title: "Building with Llama 4",
    type: "Short Course · 1 hour",
    description:
      "Understand and build applications with Meta’s Llama 4, covering setup",
    image: course_img,
    collaborators: [
      {
        name: "Meta",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    type: "Short Course · 50 mins",
    description:
      "Discover the fundamentals of generative AI and how models like GPT..",
    image: course_img,
    collaborators: [
      {
        name: "OpenAI",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 5,
    title: "Ethics in AI Development",
    type: "Short Course · 45 mins",
    description:
      "Explore the ethical considerations and challenges involved in building AI.",
    image: course_img,
    collaborators: [
      {
        name: "Stanford University",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 6,
    title: "Deploying AI Applications",
    type: "Short Course · 1 hour 10 mins",
    description:
      "Learn how to deploy AI-powered applications efficiently using.",
    image: course_img,
    collaborators: [
      {
        name: "Google Cloud",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 7,
    title: "Fine-Tuning Transformers",
    type: "Short Course · 1 hour 30 mins",
    description:
      "Master fine-tuning techniques for transformer-based models for NLP.",
    image: course_img,
    collaborators: [
      {
        name: "Hugging Face",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
];
