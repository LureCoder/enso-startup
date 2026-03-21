import { Product } from "@/types/product";

const productData: Product[] = [
  {
    id: 1,
    slug: "website",
    title: "Website",
    description: "Professional website development services for your business",
    image: "/images/blog/blog-01.jpg",
    category: "cloud",
    features: ["autoScaling", "uptime", "support247"],
  },
  {
    id: 2,
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics and insights for your business",
    image: "/images/blog/blog-02.jpg",
    category: "analytics",
    features: ["realtimeData", "customReports", "apiAccess"],
  },
  {
    id: 3,
    slug: "security-suite",
    title: "Security Suite",
    description: "Enterprise-grade security solutions for your data",
    image: "/images/blog/blog-03.jpg",
    category: "security",
    features: ["encryption", "threatDetection", "compliance"],
  },
  {
    id: 4,
    slug: "ai-assistant",
    title: "AI Assistant",
    description: "Intelligent automation powered by machine learning",
    image: "/images/blog/blog-01.jpg",
    category: "ai",
    features: ["naturalLanguage", "taskAutomation", "integration"],
  },
  {
    id: 5,
    slug: "devops-tools",
    title: "DevOps Tools",
    description: "Streamline your development and deployment workflow",
    image: "/images/blog/blog-02.jpg",
    category: "devops",
    features: ["cicdPipeline", "containerSupport", "monitoring"],
  },
  {
    id: 6,
    slug: "crm-platform",
    title: "CRM Platform",
    description: "Manage customer relationships with powerful tools",
    image: "/images/blog/blog-03.jpg",
    category: "crm",
    features: ["contactManagement", "salesPipeline", "reporting"],
  },
];

export default productData;
