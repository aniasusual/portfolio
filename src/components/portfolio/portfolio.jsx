import React, { useState, useEffect, useRef } from 'react';
import './portfolio.css';
import ReactMarkdown from 'react-markdown';
import { X, ChevronRight, ExternalLink, LucideGithub } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    video: 'https://www.loom.com/share/39177663278b4fbabebf2f0f814ddac4',
    videoPoster: '/path/to/poster-image.jpg',
    title: 'GCP Intelligent Log Analysis Agent',
    desc: `## Enterprise-Grade AI-Powered Diagnostic Agent for Google Cloud Platform

Built at Emergent (YC S24) to revolutionize how engineering teams diagnose and resolve production issues across complex multi-service architectures deployed on Google Cloud Platform.

### The Problem
Traditional log analysis is:
- **Time-Consuming**: Engineers manually search through thousands of log entries across multiple services
- **Error-Prone**: Missing critical log patterns hidden across distributed systems
- **Inefficient**: No automated correlation between services, making root cause analysis difficult
- **Reactive**: Teams discover issues only after they escalate into major incidents

### The Solution: Intelligent Autonomous Agent

An AI-powered diagnostic agent that understands your entire GCP infrastructure and autonomously investigates issues with human-level reasoning.

---

## How It Works

### 1. Architecture-Aware Intelligence
The agent maintains a complete understanding of your GCP project structure:
- **Services**: Cloud Run, App Engine, Compute Engine, GKE clusters
- **Deployments**: Kubernetes deployments, pods, containers
- **Resources**: Load balancers, databases (Cloud SQL, Firestore), storage buckets
- **Networking**: VPCs, subnets, service mesh configurations
- **Dependencies**: Service-to-service communication patterns and API relationships

This architectural knowledge enables the agent to make intelligent decisions about where to investigate when issues arise.

### 2. Natural Language Query Processing
Simply describe the issue in plain English:
- "Why is the checkout service returning 500 errors?"
- "Payment API latency increased in the last hour"
- "Users reporting authentication failures on mobile app"
- "Database connection pool exhausted on production"

The agent interprets your query, understands context, and begins autonomous investigation.

### 3. Intelligent Filter Generation
Based on your query and project architecture, the agent automatically determines:
- **Time Range**: Dynamically calculated based on issue urgency and patterns
- **Severity Filters**: ERROR, WARNING, CRITICAL, INFO based on query context
- **Service Filters**: Identifies relevant services and their dependencies
- **Resource Filters**: Specific pods, containers, or deployment versions
- **Custom Filters**: Label selectors, trace IDs, user IDs, or any GCP logging filter

**Example**: Query about authentication failures automatically filters:
- Auth service logs + API Gateway logs + Identity Provider logs
- Time range: Last 2 hours with pattern analysis
- Severity: ERROR and CRITICAL
- Trace correlation across all three services

### 4. Autonomous Log Retrieval & Pagination
- Calls GCP Cloud Logging API with optimally generated filters
- Automatically handles pagination using \`nextPageToken\` when initial results are insufficient
- Retrieves logs across multiple services simultaneously
- Continues investigation until confident diagnosis is reached or max depth is achieved

### 5. Cross-Service Root Cause Analysis
The agent doesn't just read logs—it **investigates relationships**:

**Example Investigation Flow**:
1. User reports: "Checkout failing for customers"
2. Agent examines checkout service logs → finds HTTP 503 errors
3. Traces upstream to payment service → discovers connection timeouts
4. Investigates payment service → identifies database connection pool exhaustion
5. Checks database logs → reveals slow queries from inventory service
6. **Root Cause Found**: Inventory service deployed a new version with unoptimized query causing cascade failure

The agent maps the complete failure chain across services and presents a clear root cause analysis.

### 6. Confidence-Based Reasoning
If the agent doesn't find conclusive evidence:
- **Questions User**: "Could this issue be related to the recent deployment at 14:32 UTC?"
- **Suggests Actions**: "I found partial evidence in auth logs. Should I expand the search to include the upstream API gateway?"
- **Requests Context**: "Are there any recent configuration changes to the Cloud SQL instance?"
- **Proposes Filters**: "Would you like me to investigate a broader time range or include INFO-level logs?"

### 7. Interactive Filter Buttons (Smart UX)
Instead of overwhelming users with thousands of log lines, the agent:
- Analyzes logs and identifies relevant patterns
- Returns **filter configurations** to the backend
- Frontend displays **"View Relevant Logs"** buttons embedded with precise filters
- Clicking a button opens GCP Cloud Logging console or in-app viewer with exact filters applied

**Benefits**:
- Users see analysis first, logs second
- Only relevant logs are displayed
- One-click access to exact log entries
- Maintains clean chatbot UX without log spam

---

## Technical Architecture

### Backend: FastAPI (Python)
- RESTful API endpoints for agent communication
- GCP Cloud Logging API integration
- Asynchronous log retrieval and processing
- Filter generation and optimization engine
- Session management for multi-turn conversations

### Frontend: React.js
- Real-time chat interface with streaming responses
- Dynamic button rendering for log filter actions
- Interactive visualization of service dependency graphs
- Mobile-responsive design for on-call engineers

### AI Agent: AGNO Framework
- Multi-step reasoning and planning capabilities
- Tool calling for GCP API interactions
- Context retention across conversation turns
- Self-reflection and confidence scoring
- Autonomous decision-making for investigation paths

### GCP Integration
- **Cloud Logging API**: Log retrieval with advanced filtering
- **Error Reporting API**: Aggregated error insights
- **Cloud Monitoring API**: Metrics correlation with logs
- **Cloud Trace API**: Distributed tracing for request flow analysis
- **Service Directory**: Dynamic service discovery

---

## Key Features

### Comprehensive GCP Coverage
Supports all major GCP services:
- Compute: GCE, GKE, Cloud Run, App Engine, Cloud Functions
- Storage: Cloud Storage, Filestore, Persistent Disks
- Databases: Cloud SQL, Firestore, Bigtable, Spanner, Memorystore
- Networking: VPC, Load Balancers, Cloud CDN, Cloud Armor
- Identity: IAM, Identity Platform, Security Command Center

### Advanced Investigation Capabilities
- **Distributed Tracing**: Follow request paths across microservices
- **Error Correlation**: Identify common patterns across services
- **Performance Analysis**: Detect latency spikes and bottlenecks
- **Security Investigation**: Analyze unauthorized access attempts
- **Cost Anomalies**: Identify unexpected resource usage patterns

### Proactive Suggestions
- Recommends preventive actions based on patterns
- Suggests infrastructure improvements
- Identifies potential security vulnerabilities
- Proposes cost optimization opportunities

### Multi-Format Log Support
- JSON structured logs
- Plain text logs
- Stackdriver format
- Custom log formats with automatic parsing

---

## Impact & Results

**35% Reduction in Ticket Resolution Time**
- Automated initial investigation replaces hours of manual log searching
- Engineers receive root cause analysis instead of raw logs
- Faster mean-time-to-resolution (MTTR) for production incidents

**Improved Incident Response**
- 24/7 availability for on-call engineers
- Instant context about complex multi-service issues
- Reduces escalation to senior engineers by 40%

**Enhanced Observability**
- Proactive issue detection before user impact
- Better understanding of service dependencies
- Improved documentation of incident patterns

---

## Use Cases

### 1. Production Incident Response
**Scenario**: Payment processing failures spiking
**Agent Action**: Identifies authentication token expiry in Redis cache, traces to scheduled certificate rotation, provides immediate fix

### 2. Performance Degradation
**Scenario**: API latency increased by 200ms
**Agent Action**: Discovers N+1 query pattern in new ORM migration, suggests database index creation

### 3. Security Investigation
**Scenario**: Unusual access patterns detected
**Agent Action**: Correlates failed auth attempts with IP addresses, identifies brute force attack, recommends rate limiting

### 4. Cost Optimization
**Scenario**: Unexpected GCP bill increase
**Agent Action**: Analyzes resource usage logs, identifies zombie Cloud Run instances from failed deployments

---

## Why This Matters

Traditional monitoring tools show **what** is happening.
This agent tells you **why** it's happening and **how** to fix it.

It's not just log search—it's an AI teammate that thinks like a senior engineer, understands your infrastructure, and works 24/7 to keep your systems healthy.

Built for teams running complex cloud-native applications who need intelligent, autonomous incident response at scale.`,
    github: '',
    demo: '',
    category: 'agent',
    technologies: ['Python', 'FastAPI', 'React', 'AGNO', 'GCP', 'Cloud Logging', 'AI Agents']
  },
  {
    id: 2,
    video: 'https://drive.google.com/file/d/10uMdEL-GRQwodjdyVXk4bPuEy5YuX5Px/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image
    title: 'Hyperlocal',
    desc: `
     🌐 Hyperlocal Social Networking with Jams — Real-Time Metaverse Interactions  
  I’ve built a next-gen social media platform centered around a revolutionary concept called Jams — real-time metaverse scenes where users can network, collaborate, and engage based on shared interests and proximity.
  
  🎮 What Are Jams?  
  Jams are immersive 3D spaces (metaverse-style) created around specific topics or communities. Users can join these scenes as avatars, move around, and interact with others via proximity-based voice or text chat. For example, someone can create a Coding Jam, and developers interested in programming can join, interact, and potentially collaborate on projects — all in real time.
  
  Unlike traditional social platforms where networking is slow, passive, and message-based, Jams enable instant, spatial, and personal connections.
  
  🔥 Key Features:  
  - **Live Interaction in Metaverse Scenes**: Users can move around as avatars and initiate private chats or voice calls just by approaching others.  
  - **Proximity-Based Voice Chat**: Built with WebRTC, conversations only reach people nearby — enabling organic, real-world-like networking.  
  - **Real-Time Collaboration**: Users can share screens and work together directly inside Jams.  
  - **Interest & Location-Based Discovery**: Users can explore Jams, posts, and people nearby — enabling hyperlocal networking and real-world relevance.  
  - **Public and Private Jams**: Creators can make Jams open to all or invite-only, with customizable capacity limits.  
  - **User Profiles & Follower System**: Users can share public/private posts, follow each other, and keep up with community activity.  
  - **Avatar-Based Presence**: Currently one avatar is available, but future plans include custom avatars, paid skins, animations, and interactive emotes.
  
  🧪 Example Use Case: Networking in a Coding Community
  
  **On Discord:**  
  - You join a massive server, type in crowded channels, and wait for someone to notice you.  
  - You have to ask for DMs or voice calls, which are often ignored.  
  - Group calls are chaotic — everyone hears everything.  
  
  **On My Platform:**  
  - Search for an active Coding Jam.  
  - Instantly spawn into a live 3D scene.  
  - See other developers, walk up, and talk one-on-one — no waiting, no awkward DMs.  
  - Share screens, work on code together, or move on and meet someone else — just like a real-world event.
  
  🚀 Vision for the Future:  
  - **Multiple Scene Templates**: Users will be able to choose from or create different themed environments.  
  - **Creator Ecosystem**: Artists and developers can design their own scenes, list them on the platform, and earn when others use them.  
  - **Customizable Avatars**: Users can select or purchase unique avatars, costumes, styles, and interactions.  
  - **Web3-Powered Economy**: Introducing a platform-native currency for scene purchases, avatar upgrades, and creator payouts.  
  - **SDK for Scene Creators**: A toolkit enabling developers to build and monetize their own metaverse environments.
  
  This project reimagines digital interaction, combining metaverse, hyperlocal discovery, and real-time networking to offer something fundamentally better than traditional platforms like Discord, Instagram, or Slack.
  
  > It's social networking — rebuilt for instant connection, spatial presence, and real collaboration.
  
    `,
    github: '',
    demo: 'https://in-sphere-j2ug.vercel.app/',
    category: 'web',
    technologies: ['React', 'Node.js', 'WebRTC', 'Three.js', 'sockets'] // Optional technologies list
  },
  {
    id: 3,
    video: 'https://drive.google.com/file/d/1Z2sGETAEMSiQiVd65K7PpgjiI62UPm6i/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image
    title: 'Wingman',
    desc: `📢 Ever been on a video call thinking… "What do I say next?" Or worse — "I wish I had said that instead…" / "That response could've been better…" / "I totally forgot to bring that up…" / "I missed that key slide while presenting."

Same. That's exactly why I built Wingman – your real-time copilot for every video call.

🎯 Whether it's a sales pitch, investor meeting, job interview, or internal sync, Wingman's got your back – live, discreet, and crazy smart.

💡 What Wingman does:
🔹 Gives answers in real time that are best suited for the situation – as soon as the other person speaks during a call, Wingman transcribes the audio and gives you the perfect response for that moment. Say the right thing, at the right time, and ace every kind of video meeting.
🔹 Transcribes the other person's voice in real time
🔹 Sends it to AI for on-point replies + suggestions
🔹 To enhance quality of responses upload your notes, PDFs, slides – Wingman uses that as context
🔹 Want to present better? Hit Generate Presentation → get a live teleprompt
🔹 Runs in a stealth window – even screen shares won't see it
🔹 Download full transcripts + AI-generated responses anytime`,
    github: '',
    demo: 'https://chromewebstore.google.com/detail/hdiapnnfffonbipnnmfpcdeekeihnglc?utm_source=item-share-cb',
    category: 'extension',
    technologies: ['React', 'Node.js'] // Optional technologies list
  },
  {
    id: 4,
    video: 'https://drive.google.com/file/d/1tvW3sMBvKlGlrWVOta8UvI1kXTbRs0T7/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image
    title: 'RAG-chatbot',
    desc: `The NewsBot application is a full-stack, intelligent chatbot designed to answer user queries
using a Retrieval-Augmented Generation (RAG) pipeline. Built with a Node.js/Express back-
end, a React frontend, Redis for caching and session management, and Qdrant for vector storage,
NewsBot exceeds assignment objectives through advanced features like dynamic cache warming
and a polished user interface. This document details the end-to-end flow, covering embedding
creation, indexing, and storage; Redis caching and session history; frontend API interactions;
and key design decisions with potential improvements.
2 Embedding Creation, Indexing, and Storage
The RAG pipeline processes news articles to generate embeddings, which are indexed and stored
in Qdrant for eﬃcient query retrieval.
2.1 Embedding Creation
• Data Ingestion: The backend fetches∼50 unique articles from RSS feeds (e.g., BBC
News, World, Technology) via the /api/v1/data endpoint. The getAllData function
uses rss-parser to parse feeds, deduplicating articles by URL. The scrapeFullContent
function employs cheerio to extract full text from article webpages, falling back to RSS
snippets if scraping fails.
• Text Preparation: Articles are formatted as title. fullContent for embedding.
Text is sent to Jina AI Embeddings v2 (base model) via a POST request to https:
//api.jina.ai/v1/embeddings, authenticated with JINA_API_KEY. Jina returns 768-
dimensional embeddings capturing semantic meaning.
• Error Handling: Failures in scraping or embedding are logged, with empty content or
embeddings handled gracefully to ensure pipeline continuity.
2.2 Indexing and Storage
• Qdrant Integration: The initializeQdrant function runs on startup, creating a
Qdrant collection (news_articles) with a 768-dimensional vector space and cosine sim-
ilarity metric if it doesnt exist. The storeEmbeddings function maps articles to Qdrant
points, using UUIDs (uuidv4) as point IDs.
• Point Structure: Each point includes:
– Vector: 768-dimensional Jina embedding.
– Payload: Metadata (title, link, full content, publication date).
2
NewsBot End-to-End Flow 3
• Upsert Process: The qdrantClient.upsert method stores points, overwriting du-
plicates (though UUIDs ensure uniqueness). Qdrants indexing enables fast similarity
searches.
• Persistence: Qdrant uses a mounted volume (e.g., on Railway) for data persistence
across restarts.
2.3 Query Retrieval
For each user query via /api/v1/data/query/chatbot:
• The query is embedded using Jina AI, producing a 768-dimensional vector.
• The retrieveTopKPassages function searches Qdrant for the top 5 passages (k=5) using
cosine similarity.
• Results (ID, score, title, link, content, date) are passed to the Gemini API for answer
generation.
3 Redis Caching and Session History
Redis serves as the in-memory database for caching conversation responses and managing session
history, optimizing performance.
3.1 Caching Mechanism
• Conversation Caching: The queryChatBot endpoint checks Redis for cached responses
before processing. Cache keys are query:<md5-hash-of-query-text>, with queries nor-
malized (trimmed, lowercased). Cache hits return responses immediately, bypassing
Qdrant and Gemini. Cache misses compute responses, stored with a 1-hour TTL using
redisClient.setEx.
• Dynamic Cache Warming: The warmCache function runs on startup, pre-populating
Redis with responses for common queries generated by generateCommonQueries:
– Frequent Queries: Top 10 queries from a Redis sorted set (queries:leaderboard),
tracked via zIncrBy.
– Trending Topics: Top 5 keywords from Qdrant article titles, formatted as What is
<keyword>?.
Queries are deduplicated, limited to 10, and cached with a 1-hour TTL. Static queries
serve as a fallback.
3.2 Session History
• Storage: Managed by express-session with connect-redis, storing history in Redis
under sess:<session-id>. Each sessions req.session.history holds up to 50 entries
(query, passages, answer, timestamp), pruning older entries via shift.
• TTL: Sessions have a 1-day TTL, synced with the cookies maxAge (86,400 seconds) via
RedisStore.
• Retrieval and Clearing: The /api/v1/data/session/history endpoint returns his-
tory (empty array if none). The /api/v1/data/session/clear-history endpoint clears
history and destroys sessions, updating Redis.
NewsBot End-to-End Flow 4
3.3 Query Leaderboard
• A Redis sorted set (queries:leaderboard) tracks query frequency, incremented via zIncrBy
for normalized queries.
• A 1-day TTL prevents indefinite growth.
• Used for cache warming to prioritize frequent queries.
4 Frontend API Interaction and Response Handling
The React frontend provides a responsive, animated chat interface, interacting with the backend
via REST API.
4.1 API Calls
• Axios Configuration: The ChatBot component uses Axios with withCredentials:
true to include session cookies (connect.sid). The base URL is set via VITE_API_BACKEND_URL
(e.g., https://your-backend.up.railway.app).
• Endpoints:
– POST /api/v1/data/query/chatbot: Sends { queryText, numberOfPassages: 5
}, receiving passages and an answer.
– GET /api/v1/data/session/history: Fetches history, mapping entries to mes-
sages.
– GET /api/v1/data/session/clear-history: Clears the session.
• Error Handling: Failed calls trigger fallback messages (e.g., Sorry, something went
wrong), with errors logged for debugging.
4.2 Response Handling
• Message Display: User queries are added to the messages state (sender: ’user’)
with animate-message-in. Bot responses (sender: ’bot’) show a typing indicator
during API calls. History is loaded on mount, flattening query-answer pairs.
• Scrolling: A useEffect hook auto-scrolls to new messages (messagesEndRef) only when
added, avoiding disruption.
• Session Reset: The reset button triggers a fade-out animation (animate-fade-out),
clears the session, and resets with a welcome message.
• Responsive UI: Full-screen on mobile, floating window on desktop (expandable 72px to
96px), with Tailwind animations (e.g., gradient borders).
5 Noteworthy Design Decisions
1. Dynamic Cache Warming:
• Decision: Generate queries from user frequency (Redis leaderboard) and trending
topics (Qdrant titles) instead of static lists.
• Rationale: Adapts to behavior and news, maximizing cache hits (∼70% in testing).
• Benefit: Scalable, relevant, no manual updates.
NewsBot End-to-End Flow 5
2. Redis-Centric Storage:
• Decision: Used Redis exclusively, bypassing SQL.
• Rationale: In-memory performance and TTLs suﬃce, simplifying architecture.
• Benefit: Fast, cost-eﬀective, no database overhead.
3. Secure Session Management:
• Decision: Used express-session with connect-redis, secure cookies, and withCredentials.
• Rationale: Ensures continuity and security for cross-origin requests.
• Benefit: Robust, scalable sessions.
4. Simplified NLP:
• Decision: Term frequency for trending queries, avoiding complex NLP.
• Rationale: Lightweight, suﬃcient for keyword extraction.
• Benefit: Fast, dependency-free.
5. Animation-Driven UI:
• Decision: Added Tailwind animations and typing indicator.
• Rationale: Enhances engagement, exceeds basic UI requirements.
• Benefit: Polished, modern interface.
6 Potential Improvements
1. Enhanced NLP for Trending Queries:
• Current: Term frequency on titles.
• Improvement: Use Gemini or compromise for key phrases (e.g., What is the impact
of climate change?).
• Impact: Increases query relevance.
2. Cache Invalidation:
• Current: 1-hour TTL, no update on new articles.
• Improvement: Delete outdated keys in getAllData.
• Impact: Ensures fresh answers.
3. Streaming Responses:
• Current: Full answers displayed.
• Improvement: Stream Gemini responses incrementally.
• Impact: Enhances perceived performance.
4. Rate Limiting:
• Current: No limits.
• Improvement: Add express-rate-limit (e.g., 100 requests/hour).
• Impact: Improves security.
5. Advanced Query Normalization:
NewsBot End-to-End Flow 6
• Current: Trim and lowercase.
• Improvement: Use stemming (e.g., natural) to group similar queries.
• Impact: Increases cache hits.
6. Monitoring and Analytics:
• Current: Basic logging.
• Improvement: Integrate Prometheus/Grafana for metrics.
• Impact: Provides usage insights.
7 Conclusion
NewsBot delivers a robust, eﬃcient, and user-friendly chatbot experience, surpassing assignment
objectives through:
• A sophisticated RAG pipeline with Jina embeddings and Qdrant storage.
• High-performance Redis caching with dynamic warming.
• A responsive, animated React frontend with seamless API integration.
• Thoughtful design decisions prioritizing scalability and usability.
The proposed improvements would further enhance relevance and performance, making News-
Bot suitable for production deployment.`,
    github: '',
    demo: 'https://rag-chatbot-frontend-five.vercel.app',
    category: 'chatbot',
    technologies: ['React', 'Node.js', 'RAG', 'VectorDB-Qdrant', 'Redis'] // Optional technologies list
  },
  {
    id: 5,
    video: 'https://drive.google.com/file/d/1BTzaclGDk32fNGizqsqZmp5zUGQ8GePI/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image 
    title: 'Drone Simulator',
    desc: `Drone Simulator 🚁
Live Demo

Note: The backend is hosted on Render's free tier. After making the first API call, it might take 30-60 seconds for the server to start up.

Overview
Drone Simulator is a web application that visualizes drone movements on Google Maps based on time-series coordinate data. Users can simulate multiple drone paths simultaneously, control the simulation playback, and visualize drone trajectories in real-time.
Features
The Drone Simulator is a web application designed to visualize and simulate drone movements using time-series coordinate data. Below is a detailed breakdown of what the project does:

Core Functionality
Drone Path Visualization: The application plots drone trajectories on an interactive Google Maps interface, displaying real-time movement based on provided latitude, longitude, and timestamp data.
Multi-Drone Support: It allows simultaneous simulation of multiple drone paths, with each drone's path uniquely color-coded for easy differentiation.
Playback Controls: Users can play, pause, or resume the simulation, providing control over how the drone movements are displayed.
Time-Seeking: Users can jump to specific timestamps in the simulation to analyze drone positions at particular moments.
Data Input Flexibility:
Accepts manual JSON input for coordinate data (latitude, longitude, timestamp).
Supports CSV file uploads with the same data structure for batch processing.
Path Storage and Retrieval: Drone paths can be saved (via pathName) and retrieved later using a MongoDB database, enabling persistent storage of simulations.
Key Features
Interactive Map: Integrates Google Maps for a dynamic, zoomable, and pannable interface to view drone movements.
Responsive Design: The UI adapts to different screen sizes, with collapsible controls for better usability on mobile devices.
File Processing: Handles both JSON and CSV formats, making it accessible for users with different data sources.
Real-Time Simulation: Updates drone positions on the map in real-time as the simulation progresses through timestamps.

Interactive Google Maps integration
Multiple drone path simulation support
Playback controls (play, pause, resume)
Time-seeking functionality
File upload support (JSON & CSV)
Unique color coding for each drone path
Responsive design with collapsible controls

Tech Stack

Frontend: React.js, Vite, Tailwind CSS
Backend: Express.js
Database: MongoDB
Deployment: Vercel (Frontend), Render (Backend)

Input Data Formats
JSON Manual Data Format
[
  {
    "latitude": 40.7128,
    "longitude": -74.0060,
    "timestamp": 1000
  },
  {
    "latitude": 40.7129,
    "longitude": -74.0059,
    "timestamp": 11000
  }
]

CSV File Format
latitude,longitude,timestamp
37.7749,-122.4194,0
37.7750,-122.4195,1000
37.7751,-122.4196,2000

Accepts files in CSV formats
Accepts manual entry in JSON format
Required fields: latitude, longitude, timestamp

`,
    github: '',
    demo: 'https://drone-simulator-ten.vercel.app/',
    category: 'web',
    technologies: ['React', 'Node.js', 'maps', 'MongoDB', 'express'] // Optional technologies list
  },
  {
    id: 6,
    video: 'https://drive.google.com/file/d/1WlEyPsU3B7D4g3aYrDd52dpwCoXm-CJs/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image 
    title: 'Opulent-Print on demand ecommerce',
    desc: `Art & Print-on-Demand E-Commerce Platform
Developed a comprehensive e-commerce platform tailored for artists and customers to buy, sell, and customize art and print-on-demand products. The platform delivers a seamless and engaging shopping experience with robust features and secure transaction processing.
Key Features

Product Creation & Customization: Empowered users to create, purchase, and track personalized art and print-on-demand products.
Cart Management: Built an intuitive shopping cart system allowing users to add/remove items and adjust quantities, leveraging Redux and Redux-Toolkit for efficient state management.
Secure Authentication & Payments: Implemented user authentication and authorization systems, integrated with Stripe payment gateway, Webhooks, and CLI for secure and reliable transaction processing.
Enhanced Product Discovery: Designed a shop component with pagination, filtering, and search functionality to streamline browsing and product discovery.
Admin Dashboard: Created an intuitive admin panel for managing products, transactions, stock levels, users, and reviews, featuring interactive graphs for data visualization.
Responsive Design: Ensured a user-friendly experience across devices with a focus on accessibility and performance.

Technology Stack

Frontend: React.js, Redux, Redux-Toolkit, Context-API
Backend: Node.js, Express.js
Database: MongoDB
Payment Processing: Stripe (with Webhooks and CLI)

This project showcases my ability to build scalable, user-centric web applications with a focus on seamless functionality, secure transactions, and an optimized user experience for both customers and administrators.
`,
    github: '',
    demo: 'https://660ed9e7987141235b1db971--thunderous-begonia-288545.netlify.app/',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDb', 'Redux', 'express'] // Optional technologies list
  },
  {
    id: 7,
    video: 'https://drive.google.com/file/d/1IGKhPw1JZPoJU1dRMRLu74f1nMmCNN9B/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image 
    title: 'Anywhere',
    desc: `Location-Based Social Media Platform
Built a scalable web-based social media platform designed to enhance user interaction, content sharing, and community engagement through location-based features. The platform fosters local discovery and real-time connections, achieving over 100 active monthly users with high daily engagement driven by personalized geographic feeds.
Key Features

Location-Based Engagement: Leveraged the Geolocation API for real-time location tracking, enabling users to discover nearby users and their posts, promoting localized interactions.
Content Sharing: Supported private and public media posts, allowing users to share content flexibly while managing connections through a robust system for sending, accepting, and deleting requests.
Real-Time Communication: Integrated WebSocket technology for real-time notifications and a messaging system, ensuring instant updates on connection requests and post interactions.
Personalized Experience: Developed a content recommendation engine to suggest relevant posts and connections, boosting user engagement through tailored feeds.
Secure Authentication: Implemented robust authentication and authorization systems for secure user access and data protection.
State Management: Utilized Redux, Redux-Toolkit, and Context-API for efficient and scalable state management across the application.
Responsive Design: Delivered a seamless and accessible user experience across devices, optimized for performance and usability.

Technology Stack

Frontend: React.js, Redux, Redux-Toolkit, Context-API
Backend: Node.js, Express.js
Database: MongoDB
APIs & Tools: Geolocation API, WebSocket

This project demonstrates my expertise in developing dynamic, user-focused social platforms with real-time features, location-based functionality, and personalized content delivery, driving meaningful community engagement and scalability.
`,
    github: '',
    demo: 'https://anywhere-co.vercel.app/',
    category: 'web',
    technologies: ['React', 'Node.js', 'Redux', 'Mongodb', 'express', 'Redis'] // Optional technologies list
  },
  {
    id: 8,
    video: 'https://drive.google.com/file/d/1rEEjnpFg7uG4RMzs2gCSx4LG9Dsth755/view?usp=sharing', // MP4 video file path
    videoPoster: '/path/to/poster-image.jpg', // Optional thumbnail image 
    title: 'Cafe-des-Juit',
    desc: `– Developed Café des Juit, a food ordering and delivery application for ordering food from the college cafeteria de-
signed to streamline the process of ordering meals and managing deliveries with features for user login, registration,
and logout to enhance the user experience and streamline the ordering process.
– Implemented cart functionalities including add to cart, remove items, and order placement along with an order
history feature under My Orders to display past purchases, and enabled item search for users to easily find products
to add to their cart.
`,
    github: '',
    demo: 'https://660b9a48a1f59b7c6f292280--capable-pastelito-78c9f0.netlify.app/',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDb', 'Redux', 'express'] // Optional technologies list
  },

  // ...other projects
];

// Function to convert Google Drive URL or Loom URL to preview link for video embedding
const getGoogleDriveVideoUrl = (url) => {
  // Handle Loom videos
  if (url.includes('loom.com/share/')) {
    const loomIdMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (loomIdMatch && loomIdMatch[1]) {
      return `https://www.loom.com/embed/${loomIdMatch[1]}`;
    }
  }

  // Handle Google Drive videos
  const fileIdMatch = url.match(/\/d\/(.+?)\/view/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }

  return url; // Fallback to original URL if parsing fails
};

const ProjectModal = ({ project, isOpen, onClose, startWithVideo = false }) => {
  const modalRef = useRef(null);
  const [isFullscreenVideo, setIsFullscreenVideo] = useState(startWithVideo);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreenVideo) {
          setIsFullscreenVideo(false); // Exit fullscreen video mode on Escape
        } else {
          onClose(); // Close modal if not in fullscreen video mode
        }
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, isFullscreenVideo]);

  useEffect(() => {
    setIsFullscreenVideo(startWithVideo);
  }, [startWithVideo]);

  const toggleFullscreenVideo = () => {
    setIsFullscreenVideo(!isFullscreenVideo);
  };

  const handleIframeError = () => {
    console.error('Modal iframe failed to load:', 'URL:', project.video);
  };

  if (!isOpen) return null;

  const { title, desc, github, demo, video, technologies, videoPoster } = project;
  const videoUrl = getGoogleDriveVideoUrl(video);

  return (
    <div className="modal-overlay">
      {isFullscreenVideo ? (
        <div className="fullscreen-video-container" ref={modalRef}>
          <div className="video-controls">
            <button
              className="video-control-btn"
              onClick={toggleFullscreenVideo}
              aria-label="Return to project details"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <iframe
            src={videoUrl}
            className="fullscreen-video"
            allow="autoplay; fullscreen"
            allowFullScreen
            onError={handleIframeError}
            style={{ border: 'none' }}
          >
            <p>Video failed to load. Please ensure the video is publicly accessible or try again later.</p>
          </iframe>
        </div>
      ) : (
        <div className="modal-content" ref={modalRef}>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>

          <div className="modal-video-container">
            <iframe
              src={videoUrl}
              className="modal-video"
              allow="autoplay; fullscreen"
              allowFullScreen
              onError={handleIframeError}
              style={{ border: 'none' }}
            >
              <p>Video failed to load. Please ensure the video is publicly accessible or try again later.</p>
            </iframe>
            <button
              className="expand-video-btn"
              onClick={toggleFullscreenVideo}
              aria-label="Expand video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          </div>

          <div className="modal-details">
            <h2>{title}</h2>

            {technologies && technologies.length > 0 && (
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}

            <div className="modal-description">
              <ReactMarkdown>{desc}</ReactMarkdown>
            </div>

            <div className="modal-actions">
              {github && (
                <a href={github} className="btn btn-with-icon" target="_blank" rel="noopener noreferrer">
                  <LucideGithub size={18} />
                  <span>View Source</span>
                </a>
              )}
              {demo && (
                <a href={demo} className="btn btn-primary btn-with-icon" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setVisibleProjects(portfolioData);

    const timer = setTimeout(() => {
      setIsInView(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const openProjectModal = (project, showVideo = false) => {
    const projectWithVideoFlag = {
      ...project,
      _showVideoFirst: showVideo
    };
    setSelectedProject(projectWithVideoFlag);
    setModalOpen(true);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setVisibleProjects(portfolioData);
      return;
    }
    const filtered = portfolioData.filter(item => item.category === category);
    setVisibleProjects(filtered);
    setIsInView(false);
    setTimeout(() => setIsInView(true), 10);
  };

  const handleIframeError = (e) => {
    console.error('Portfolio item iframe failed to load:', 'URL:', e.target.src);
  };

  return (
    <section id="portfolio">
      <h5>Projects in</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__filters">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => handleFilter('web')}
        >
          Web Apps
        </button>
        <button
          className={`filter-btn ${activeFilter === 'agent' ? 'active' : ''}`}
          onClick={() => handleFilter('agent')}
        >
          AI Agents
        </button>
        <button
          className={`filter-btn ${activeFilter === 'chatbot' ? 'active' : ''}`}
          onClick={() => handleFilter('chatbot')}
        >
          Chatbots
        </button>
        <button
          className={`filter-btn ${activeFilter === 'extension' ? 'active' : ''}`}
          onClick={() => handleFilter('extension')}
        >
          Extensions
        </button>
        <button
          className={`filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
          onClick={() => handleFilter('ecommerce')}
        >
          E-commerce
        </button>
      </div>

      <div className={`container portfolio__container ${isInView ? 'visible' : ''}`}>
        {visibleProjects.map((project, index) => {
          const { id, video, title, github, demo, videoPoster } = project;
          const videoUrl = getGoogleDriveVideoUrl(video);

          return (
            <article
              key={id}
              className={`portfolio__item ${isInView ? 'visible' : ''}`}
              style={{ '--order': index + 1 }}
            >
              <div className="portfolio__item-video">
                <iframe
                  src={videoUrl}
                  className="video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  onError={handleIframeError}
                  style={{ border: 'none' }}
                >
                  <p>Video failed to load. Please ensure the video is publicly accessible or try again later.</p>
                </iframe>
                <div className="overlay-gradient"></div>
                <button
                  className="play-fullscreen-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectModal(project, true);
                  }}
                  aria-label="Play video fullscreen"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </button>
              </div>

              <div className="portfolio__item-content">
                <h3>{title}</h3>
                <button
                  className="view-project-btn"
                  onClick={() => openProjectModal(project)}
                  aria-label={`View details for ${title}`}
                >
                  <span>View Project</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="portfolio__item-links">
                {github && (
                  <a
                    href={github}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <LucideGithub size={20} />
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={closeProjectModal}
          startWithVideo={selectedProject && selectedProject._showVideoFirst}
        />
      )}
    </section>
  );
};



export default Portfolio;