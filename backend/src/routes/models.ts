
import { Request, Response } from 'express';

/**
 * GET /models
 * Fetches a list of available AI models in the marketplace.
 */
export function getModels(req: Request, res: Response): void {
    const models = [
        {
            id: "1",
            name: "Vision AI",
            description: "An AI model specialized in image recognition and processing.",
            version: "2.1.0",
            tags: ["vision", "image", "recognition"],
        },
        {
            id: "2",
            name: "Natural Language Processor",
            description: "A robust NLP model for text analysis and generation.",
            version: "3.0.0",
            tags: ["nlp", "language", "text"],
        },
        {
            id: "3",
            name: "Speech-to-Text",
            description: "An AI model for converting speech into accurate text.",
            version: "1.5.2",
            tags: ["speech", "audio", "text"],
        },
    ];

    res.status(200).json(models);
}
