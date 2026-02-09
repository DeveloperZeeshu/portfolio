export interface Project {
  slug: string
  title: string
  description: string
  summary: string
  stack: string[]
  link?: string
  github?: string
  problem: string
  solution: string
  architecture: string
  challenges: string
  outcome: string
}

export const projects: Project[] = [
  {
    slug: "zenith-platform",
    title: "Zenith Platform",
    description:
      "A real-time collaborative workspace for distributed engineering teams with live code editing and integrated CI/CD pipelines.",
    summary:
      "Built an end-to-end platform that enables engineering teams to collaborate on code in real-time, review pull requests inline, and deploy directly from the workspace.",
    stack: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL", "Redis", "Docker"],
    link: "https://zenith.dev",
    github: "https://github.com",
    problem:
      "Distributed engineering teams were losing hours daily context-switching between their editor, GitHub, Slack, and deployment dashboards. The cognitive overhead of coordinating across these tools was slowing down iteration cycles by an estimated 30%.",
    solution:
      "I designed and built a unified workspace that combines a collaborative code editor, real-time PR reviews, and one-click deployments. The architecture uses operational transforms for conflict-free concurrent editing, with WebSocket connections managed through a Redis pub/sub layer for horizontal scaling.",
    architecture:
      "The frontend is a Next.js application using a custom CRDT-based editor built on top of CodeMirror 6. The backend orchestrates through a Node.js API gateway that routes to microservices: an editor sync service, a Git integration service, and a deployment pipeline manager. All state is persisted in PostgreSQL with Redis handling ephemeral session data and real-time message brokering.",
    challenges:
      "The biggest challenge was achieving sub-50ms latency for concurrent edits across global regions. I solved this by implementing a hybrid approach: optimistic local-first updates with server reconciliation, combined with edge-deployed WebSocket relays that minimize round-trip time. Another significant challenge was building a permission model granular enough for enterprise use while keeping the API surface simple.",
    outcome:
      "The platform reduced context-switching time by 45% in beta testing with three enterprise teams. It now handles 200+ concurrent editing sessions with p99 latency under 40ms. The project was featured at a developer conference and attracted seed funding.",
  },
  {
    slug: "neural-search",
    title: "Neural Search Engine",
    description:
      "An AI-powered semantic search engine that understands natural language queries across large documentation corpuses.",
    summary:
      "Developed a search system that uses vector embeddings and hybrid retrieval to deliver contextually relevant results from technical documentation.",
    stack: ["Python", "FastAPI", "React", "Pinecone", "OpenAI", "Kubernetes"],
    github: "https://github.com",
    problem:
      "Traditional keyword-based search failed to surface relevant results when developers asked natural language questions about complex codebases. Engineers were spending 20+ minutes finding relevant documentation, leading to duplicated effort and inconsistent implementations.",
    solution:
      "I built a hybrid search engine that combines dense vector embeddings for semantic understanding with sparse BM25 retrieval for keyword precision. The system pre-processes documentation through a chunking pipeline that preserves code context and hierarchical relationships between sections.",
    architecture:
      "The ingestion pipeline runs on Kubernetes, processing documents through a DAG of transformers: markdown parsing, code extraction, hierarchical chunking, and embedding generation via OpenAI. The search API is a FastAPI service that performs hybrid retrieval from Pinecone (dense) and Elasticsearch (sparse), with a re-ranking step using a cross-encoder model. The React frontend features a conversational search interface with streaming results.",
    challenges:
      "Balancing relevance between semantic and keyword results required extensive A/B testing of fusion algorithms. I implemented Reciprocal Rank Fusion with tunable weights and built an evaluation framework using NDCG metrics against human-labeled query sets. Another challenge was handling code snippets in embeddings, which I solved through specialized chunking strategies that preserve function boundaries.",
    outcome:
      "Search relevance improved by 65% over the previous keyword system, measured by click-through rates and user satisfaction surveys. Average time-to-answer dropped from 22 minutes to under 3 minutes. The system now indexes 500k+ documentation pages and handles 10k queries per day.",
  },
  {
    slug: "velocity-analytics",
    title: "Velocity Analytics",
    description:
      "A high-performance analytics dashboard processing millions of events in real-time with sub-second query response times.",
    summary:
      "Created an analytics platform from scratch that ingests, processes, and visualizes product usage data at scale with real-time streaming updates.",
    stack: ["Go", "React", "ClickHouse", "Kafka", "gRPC", "Terraform"],
    link: "https://velocity.dev",
    problem:
      "The existing analytics solution could not handle the volume of events generated by a growing user base. Queries that should take milliseconds were timing out at 30+ seconds, dashboards were unreliable, and the team had no visibility into real-time user behavior during launches.",
    solution:
      "I architected a new analytics pipeline from ingestion to visualization. Events flow through a Kafka-based streaming pipeline into ClickHouse, a columnar database optimized for analytical queries. The API layer uses Go for maximum throughput, with a React dashboard that supports real-time streaming updates via Server-Sent Events.",
    architecture:
      "The system consists of three layers: an ingestion tier (Go HTTP collectors writing to Kafka), a processing tier (Kafka Streams for enrichment, sessionization, and aggregation into ClickHouse), and a serving tier (Go API with materialized views for common queries and a React dashboard with WebSocket streaming). Infrastructure is managed with Terraform across multiple availability zones.",
    challenges:
      "The primary challenge was maintaining query performance as data volume grew to billions of rows. I implemented a tiered storage strategy with hot/warm/cold partitions, combined with aggressive materialized views for dashboard queries. Another challenge was ensuring exactly-once semantics in the streaming pipeline, which I solved using Kafka transactions with idempotent writes to ClickHouse.",
    outcome:
      "Query response times dropped from 30+ seconds to under 200ms for 95th percentile queries. The system now processes 50M+ events daily with 99.99% uptime. Real-time dashboards became the primary tool for product launches, enabling data-driven decisions within minutes instead of days.",
  },
  {
    slug: "forge-design-system",
    title: "Forge Design System",
    description:
      "A comprehensive, accessible component library and design system powering a suite of enterprise applications.",
    summary:
      "Led the creation of a design system serving 12 product teams, with 80+ components, automated accessibility testing, and a Figma-to-code pipeline.",
    stack: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Chromatic", "Playwright"],
    github: "https://github.com",
    problem:
      "A growing organization with 12 product teams had severe UI inconsistency. Each team maintained their own component libraries, leading to duplicated effort, accessibility violations, and a fragmented user experience. Onboarding new engineers took weeks because they had to learn team-specific patterns.",
    solution:
      "I led the design and development of a unified design system built on React and TypeScript. The system includes a comprehensive component library, design tokens for theming, and automated tooling for accessibility compliance. I established a contribution model that allowed product teams to propose and build components within the system's constraints.",
    architecture:
      "The design system is published as a monorepo of npm packages: core components, icons, tokens, and utilities. Components are built with React using a compound component pattern for flexibility, styled with Tailwind CSS and design tokens for consistent theming. Storybook serves as the documentation and testing environment, with Chromatic for visual regression testing and Playwright for interaction testing. A custom Figma plugin syncs design tokens bidirectionally between Figma and code.",
    challenges:
      "The biggest challenge was adoption. I solved this through a progressive migration strategy, building compatibility layers that wrapped existing components and gradually replacing internals. Performance was another concern. I implemented tree-shaking optimizations and lazy-loaded component registries that reduced bundle sizes by 40% compared to monolithic imports.",
    outcome:
      "The design system now powers all 12 product applications with 95% component reuse. Accessibility violations dropped by 80%, and new engineer onboarding time was cut in half. The contribution model has grown to include 40+ engineers submitting components, with automated CI checks ensuring quality standards.",
  },
]
