export const site = {
  name: "Pallavarajan T",
  initials: "PT",
  role: "AI & Machine Learning Engineer",
  summary: "Computer Science and Engineering student building real-world AI applications across computer vision, NLP, and applied machine learning.",
  location: "Pudukkottai, Tamil Nadu",
  email: "Pallavarajan2005@gmail.com",
  phone: "8754910894",
  github: "https://github.com/pallava-06",
  linkedin: null as string | null,
  cgpa: "8.14",
  education: "B.E CSE · 2023–2027",
};

export const skills = {
  languages: ["Python", "SQL"],
  aiMl: ["TensorFlow", "FastAPI", "PyTorch", "scikit-learn", "OpenCV", "NumPy", "Pandas"],
  nlp: ["Sentence-Transformers", "Transformers", "Hugging Face"],
  tools: ["Git", "GitHub", "VS Code"],
  concepts: ["Deep Learning", "Computer Vision", "NLP"],
};

export const projects = [
  {
    slug: "resumematch-ai",
    number: "01",
    title: "ResumeMatch AI",
    category: "AI / NLP",
    year: "Project",
    summary: "A resume evaluation web app that uses semantic embeddings to match resumes against job descriptions, then layers on structured skill and experience extraction.",
    role: "AI/ML developer",
    company: "Personal project",
    featured: true,
    technologies: ["Python", "FastAPI", "Sentence-Transformers", "HTML/JS"],
    liveUrl: null,
    githubUrl: null,
    problem: "Keyword-only resume matching can miss semantically similar skills and experience when the wording differs.",
    approach: "Started with TF-IDF and scikit-learn, then iterated to sentence-transformer embeddings with cosine similarity for semantic matching, while retaining regex-based parsing for skills and experience.",
    architecture: ["Single-file HTML/JS interface", "FastAPI application layer", "Sentence-Transformer embedding model", "Cosine similarity + regex extraction"],
    features: ["Semantic resume-to-job matching", "Skill extraction", "Experience parsing", "Web-based evaluation flow"],
    results: ["Moved beyond the initial TF-IDF baseline", "Delivered an end-to-end web application", "Combined semantic similarity with structured extraction"],
    lessons: ["The right representation matters as much as the matching algorithm", "A simple frontend can still expose a useful ML workflow clearly"],
  },
  {
    slug: "social-distancing-detector",
    number: "02",
    title: "Social Distancing Detector",
    category: "Computer Vision",
    year: "Project",
    summary: "A real-time video pipeline that detects people and flags distancing violations using YOLOv11, centroid distances, and live visual feedback.",
    role: "Computer vision developer",
    company: "Personal project",
    featured: true,
    technologies: ["Python", "YOLOv11", "Ultralytics", "OpenCV", "NumPy", "SciPy"],
    liveUrl: null,
    githubUrl: "https://github.com/pallava-06/Social-distance-monitoring-system",
    problem: "Real-time monitoring needs to identify people consistently and translate detections into an understandable signal about pairwise distance.",
    approach: "Detected people with YOLOv11, computed pairwise Euclidean distances between detection centroids using scipy.spatial.distance.cdist, and applied configurable confidence and distance thresholds.",
    architecture: ["Video input", "YOLOv11 person detection", "Centroid extraction", "Pairwise distance calculation", "Violation classification + annotated output"],
    features: ["Live annotated video", "Safe vs. violating bounding boxes", "Running violation counter", "Exported processed video", "Live preview mode"],
    results: ["End-to-end real-time monitoring pipeline", "Configurable detection and distance thresholds", "Visual feedback directly in the processed video"],
    lessons: ["A technically useful model still needs a clear output signal", "Thresholds should stay configurable because deployment context changes"],
  },
  {
    slug: "lstm-text-generator",
    number: "03",
    title: "LSTM Text Generator",
    category: "Deep Learning",
    year: "Project",
    summary: "An LSTM-based text generation model trained from scratch as part of hands-on deep learning work.",
    role: "ML developer",
    company: "Personal project",
    featured: false,
    technologies: ["Python", "LSTM", "Deep Learning"],
    liveUrl: null,
    githubUrl: null,
    problem: "Understanding sequence generation requires more than calling a pretrained model; it benefits from building and training the sequence model directly.",
    approach: "Built and trained an LSTM text generator from scratch, reinforcing the mechanics of sequential modeling and generation.",
    architecture: ["Text preprocessing", "Sequence modeling", "LSTM network", "Autoregressive generation"],
    features: ["From-scratch training", "Sequence generation", "Hands-on neural network implementation"],
    results: ["Strengthened practical understanding of sequence modeling", "Added a from-scratch deep learning project to the portfolio"],
    lessons: ["Building models directly makes failure modes and training behavior easier to reason about"],
  },
] as const;

export const experience = [
  {
    period: "10 Dec 2025 – 30 Dec 2025",
    company: "VJ Infotech",
    location: "Salem",
    title: "Applied Machine Learning in Python · Intern",
    description: "Worked with NumPy, Pandas, and Scikit-learn to implement core machine learning concepts through hands-on projects.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    period: "2025",
    company: "Pantech Prolabs India Pvt Ltd",
    location: "Remote",
    title: "Deep Learning · Intern",
    description: "Completed deep learning internship work covering neural network fundamentals, perceptrons, activation functions, gradient descent, and backpropagation with hands-on implementation.",
    technologies: ["Deep Learning", "Neural Networks"],
  },
] as const;

export const achievements = [
  { type: "Certification", title: "Applied Machine Learning in Python", meta: "VJ Infotech · 2025" },
  { type: "Education", title: "B.E. Computer Science & Engineering", meta: "Amrita College of Engineering and Technology · Nagercoil · 2023–2027 · CGPA 8.14" },
] as const;

export const labExperiments = [
  {
    tag: "NLP",
    title: "Semantic matching",
    description: "Compare resumes and job descriptions with sentence-transformer embeddings and cosine similarity.",
    detail: "Embeddings turn text into vectors, allowing semantically related phrases to be compared even when wording differs.",
  },
  {
    tag: "CV",
    title: "Distance-aware detection",
    description: "Turn YOLOv11 detections into a monitoring signal with centroid distances and configurable thresholds.",
    detail: "The pipeline demonstrates how model outputs become application logic: detect, measure, classify, visualize.",
  },
  {
    tag: "DL",
    title: "Sequence generation",
    description: "Explore the core flow of an LSTM text generator trained from scratch.",
    detail: "Sequence models make the relationship between token history, hidden state, training, and generation explicit.",
  },
] as const;
