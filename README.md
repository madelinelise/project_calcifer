TODO:
- Create a docker container.
- Find a home for embeddings - either pinecone or postgres db.
- Create a ui for the python scripts that allows tagging.
- Try with Deepseek.

# Open Source AI Stack (Project Calcifer)
This stack includes: Next.js, Python, Flowise, and uses an Ollama model for AI.

-----
## 📌 First Time Setup
1. Install NodeJS >= 18.15.0: 
See instructions here: https://nodejs.org/en/download

2. Install Flowise:
`npm install -g flowise`

3. Install Ollama:
Download from here: https://ollama.com/

4. Install Python and pip
`brew install python`  # macOS (Homebrew)  
`python3 -m ensurepip --upgrade`

-----
## Frontend
The frontend is built with Next.js to serve the content made by AI agents.
1. Install dependencies: `npm install`
2. Run the server `npm run dev` (available at http://localhost:3000)
3. To generate a production build: `npm run build`
4. Export static files: `npm run export`

-----
## Backend
### Python Scripts
`python3 get_web_text.py <url>`:Generates a markdown file from a web url, then saves it into the document store.
`python3 get_yt_text.py <url>`:Generates a set of markdown files from a web url that is a youtube playlist.

-----
## AI Tools
### Running Flowise
To start Flowise, run the following:
- `npx flowise start`
- then will be available at http://localhost:3000/

### Chatting with Llama Models
To run and chat with a Llama model, use:
`ollama run <model_name>`

### Model Library
Ollama offers a diverse library of models. Below is a list of models available, including their parameters, sizes, and commands to run them.

| **Model**            | **Parameters** | **Size**   | **Command**                              |
|----------------------|----------------|------------|------------------------------------------|
| **Llama 3.3**        | 70B            | 43GB       | `ollama run llama3.3`                   |
| **Llama 3.2**        | 3B             | 2.0GB      | `ollama run llama3.2`                   |
| **Llama 3.2 (1B)**   | 1B             | 1.3GB      | `ollama run llama3.2:1b`                |
| **Llama 3.2 Vision** | 11B            | 7.9GB      | `ollama run llama3.2-vision`            |
| **Llama 3.2 Vision** | 90B            | 55GB       | `ollama run llama3.2-vision:90b`        |
| **Llama 3.1**        | 8B             | 4.7GB      | `ollama run llama3.1`                   |
| **Llama 3.1**        | 405B           | 231GB      | `ollama run llama3.1:405b`              |
| **Phi 4**            | 14B            | 9.1GB      | `ollama run phi4`                       |
| **Phi 3 Mini**       | 3.8B           | 2.3GB      | `ollama run phi3`                       |
| **Gemma 2 (2B)**     | 2B             | 1.6GB      | `ollama run gemma2:2b`                  |
| **Gemma 2**          | 9B             | 5.5GB      | `ollama run gemma2`                     |
| **Gemma 2 (27B)**    | 27B            | 16GB       | `ollama run gemma2:27b`                 |
| **Mistral**          | 7B             | 4.1GB      | `ollama run mistral`                    |
| **Moondream 2**      | 1.4B           | 829MB      | `ollama run moondream`                  |
| **Neural Chat**      | 7B             | 4.1GB      | `ollama run neural-chat`                |
| **Starling**         | 7B             | 4.1GB      | `ollama run starling-lm`                |
| **Code Llama**       | 7B             | 3.8GB      | `ollama run codellama`                  |
| **Llama 2 Uncensored** | 7B          | 3.8GB      | `ollama run llama2-uncensored`          |
| **LLaVA**            | 7B             | 4.5GB      | `ollama run llava`                      |
| **Solar**            | 10.7B          | 6.1GB      | `ollama run solar`                      |

- For more information about the available models, visit the [Ollama Model Library](https://ollama.com/library).
- Ensure that you have sufficient storage space to download the required model files.

### Hardware Requirements
To ensure smooth operation, your system should meet the following minimum requirements:
- **7B Models**: At least 8 GB of RAM
- **13B Models**: At least 16 GB of RAM
- **33B Models**: At least 32 GB of RAM

## Learning Resources:
- [Flowise Ollama Tutorial | How to Load Local LLM on Flowise](https://www.youtube.com/watch?v=85gZ7G-ze3c&list=PLHd6-S6zVDqrB5txJhy0VYVF-jdqewYX9&index=3)
