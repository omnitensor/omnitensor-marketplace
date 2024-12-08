
# OmniTensor Marketplace API Endpoints

## Overview
The OmniTensor Marketplace provides a RESTful API for managing AI models and user interactions. These endpoints allow developers to integrate seamlessly with the OmniTensor ecosystem, fetching model details, uploading new models and managing user accounts.

## Endpoints

### 1. Get All Models
**GET** `/models`

**Description:** Retrieve a list of all available models in the marketplace.

**Response:**
```json
[
    {
        "id": "model-123",
        "name": "Large Language Model",
        "description": "A state-of-the-art language model",
        "version": "1.0.0"
    }
]
```

### 2. Get Model by ID
**GET** `/models/{id}`

**Description:** Fetch details of a specific model by its ID.

**Response:**
```json
{
    "id": "model-123",
    "name": "Large Language Model",
    "description": "A state-of-the-art language model",
    "version": "1.0.0"
}
```

### 3. Add New Model
**POST** `/models`

**Description:** Add a new model to the marketplace.

**Request Body:**
```json
{
    "name": "New AI Model",
    "description": "Description of the model",
    "version": "1.0.0"
}
```

**Response:**
```json
{
    "message": "Model successfully added",
    "id": "model-456"
}
```

### 4. Delete Model
**DELETE** `/models/{id}`

**Description:** Remove a model from the marketplace.

**Response:**
```json
{
    "message": "Model successfully deleted"
}
```

### 5. Get All Users
**GET** `/users`

**Description:** Fetch a list of all registered users.

**Response:**
```json
[
    {
        "id": "user-001",
        "username": "alice",
        "email": "alice@example.com"
    }
]
```
