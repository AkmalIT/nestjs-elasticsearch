# Getting Started

## Prerequisites

Make sure you have the following tools installed on your local development environment:

- **Node.js** (v14+)
- **Yarn** or **npm**
- **Docker** (optional, for running Elasticsearch locally)
- **Elasticsearch** (v8.15.1 recommended)

## Installation

### Clone the Repository:

```bash
git clone https://github.com/yourusername/elasticsearch-nestjs.git
cd elasticsearch-nestjs
```

## Install Dependencies

Using yarn

```bash
yarn install
```

Using npm

```bash
npm install
```

## Setup Elasticsearch

If you have Docker installed, you can run Elasticsearch with Docker:

```bash
docker-compose up -d
```

Or install Elasticsearch directly from Elasticsearch's

## Configure .env (Optional)

Create a .env file and configure your environment variables if necessary. This could include ELASTICSEARCH_URL, TLS_OPTIONS, etc.

```bash
ELASTICSEARCH_URL=https://localhost:9200
```

## Running the Application

To run the application in development mode:

Using Yarn:

```bash
yarn start:dev
```

Alternatively, with npm:

```bash
npm run start:dev
```

This will start the application and connect it to Elasticsearch. By default, it will use the localhost address for Elasticsearch at port 9200.

# API Endpoints

## POST /posts/index

Indexes a new post into Elasticsearch.

### Request Body:

```json
{
  "title": "Introduction to Elasticsearch",
  "content": "Elasticsearch is a powerful tool for data indexing..."
}
```

## GET /posts/search

Searches posts based on query parameters.

### Query Parameters:

- q: The search query.

# Troubleshooting

## Elasticsearch Heap Memory Usage

Elasticsearch can use a large amount of memory by default. If you face performance issues due to excessive memory consumption, you can configure heap size in the jvm.options file located in your Elasticsearch installation directory:

```bash
-Xms4g  # Set the minimum heap size (4GB)
-Xmx4g  # Set the maximum heap size (4GB)
```
