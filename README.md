# OmniTensor Marketplace

The OmniTensor Marketplace is a decentralized platform for AI models, enabling developers, researchers and businesses to discover, purchase and deploy AI models directly into their OmniTensor-based applications.

## Features

- **Browse Models:** A searchable catalog of AI models categorized by use case, including language models, image classifiers, and speech recognition tools.
- **Model Deployment:** Simplified deployment of AI models directly to the OmniTensor decentralized AI infrastructure.
- **Decentralized Hosting:** All AI models are hosted and served through the decentralized OmniTensor network, ensuring resilience and availability.
- **Secure Payments:** Purchase and royalties for models are handled securely through the OmniTensor blockchain using the OMNIT token.

## Repository Structure

- **Frontend [in progress]:** React application for the user interface of the marketplace.
- **Backend:** Node.js-based API for managing model metadata, user accounts, and transactions.
- **Docker Compose:** Configurations for seamless deployment of the marketplace.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/omnitensor/omnitensor-marketplace/
   cd omnitensor-marketplace
   ```

2. Install dependencies:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. Start the services:
   ```bash
   docker-compose up
   ```

4. Access the application:
   - Frontend: [http://localhost:3001](http://localhost:3001)
   - Backend: [http://localhost:3002](http://localhost:3002)

## Contributing

We welcome contributions from the community! Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
