import { TestTube, Code, GitBranch, Laptop, Terminal, Users, CheckCircle2 } from "lucide-react";

export const skillsData = [
  {
    category: "Testing Skills",
    icon: TestTube,
    items: [
      { name: "Manual Testing", icon: "/src/assets/manual-testing-icon.png" },
      { name: "Functional Testing" },
      { name: "Web Testing", icon: "/src/assets/web-testing-icon.png" },
      { name: "API Testing", icon: "/src/assets/api-testing-icon.png" },
      { name: "Mobile Testing" },
      { name: "Integration Testing", icon: "/src/assets/integration-testing-icon.png" },
      { name: "System Testing", icon: "/src/assets/system-testing-icon.png" },
      { name: "UAT" },
      { name: "Test Planning" },
    ],
  },
  {
    category: "Programming",
    icon: Code,
    items: [
      { name: "Java", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Karate DSL", icon: "/lovable-uploads/5106dbc4-03a3-49cd-a22e-8b8b5eef0a43.png" },
      { name: "Gherkin", icon: "https://www.vectorlogo.zone/logos/cucumberio/cucumberio-icon.svg" },
      { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
      { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
      { name: "Bash", icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" },
    ],
  },
  {
    category: "Test Automation",
    icon: TestTube,
    items: [
      { name: "Selenium", icon: "https://www.selenium.dev/images/selenium_logo_square_green.png" },
      { name: "Appium", icon: "/lovable-uploads/8878cdb9-43f0-44ac-8a25-fea1bee8bb6e.png" },
      { name: "TestNG", icon: "https://avatars.githubusercontent.com/u/12528662" },
      { name: "Rest Assured", icon: "https://rest-assured.io/img/logo-transparent.png" },
      { name: "Cucumber", icon: "https://www.vectorlogo.zone/logos/cucumberio/cucumberio-icon.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "JMeter", icon: "https://jmeter.apache.org/images/favicon.png" },
    ],
  },
  {
    category: "APIs worked with",
    icon: Terminal,
    items: [
      { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
      { name: "gRPC", icon: "https://www.vectorlogo.zone/logos/grpcio/grpcio-icon.svg" },
      { name: "REST", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    category: "Version Control & Infra",
    icon: GitBranch,
    items: [
      { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
      { name: "Azure Pipelines", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
      { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
      { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    ],
  },
  {
    category: "Tools & IDEs",
    icon: Laptop,
    items: [
      { name: "IntelliJ", icon: "https://www.vectorlogo.zone/logos/jetbrains/jetbrains-icon.svg" },
      { name: "VSCode", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
      { name: "Eclipse", icon: "https://www.vectorlogo.zone/logos/eclipse/eclipse-icon.svg" },
      { name: "Android Studio", icon: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
      { name: "Xcode", icon: "https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png" },
      { name: "Datadog", icon: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg" },
    ],
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: [
      { name: "Communication" },
      { name: "Collaboration" },
      { name: "Problem Solving" },
      { name: "Critical Thinking" },
      { name: "Detail Oriented" },
      { name: "Agile/Scrum" },
    ],
  },
];