
import { Request, Response } from 'express';

/**
 * GET /users
 * Retrieves a list of active users registered on the marketplace.
 */
export function getUsers(req: Request, res: Response): void {
    const users = [
        {
            id: "u1",
            username: "developer123",
            email: "developer123@example.com",
            registeredAt: "2023-11-10",
        },
        {
            id: "u2",
            username: "ai_enthusiast",
            email: "ai_enthusiast@example.com",
            registeredAt: "2023-12-01",
        },
        {
            id: "u3",
            username: "ml_expert",
            email: "ml_expert@example.com",
            registeredAt: "2023-12-05",
        },
    ];

    res.status(200).json(users);
}
