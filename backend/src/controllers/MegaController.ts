import { Request, Response } from "express";
import db from "./db";

export async function last(req: Request, res: Response): Promise<void> {
    try {
        const result = await db.query("SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1");
        res.json(result.rows[0]);
    } catch (e: any) {
        res.status(500).json({ message: e.message });
    }
}

export async function findByNumber(req: Request, res: Response): Promise<void> {
    try {
        const { concurso } = req.params;
        const result = await db.query("SELECT * FROM megasena WHERE concurso = $1", [concurso]);

        if (result.rows.length === 0) {
            res.status(404).json({ message: `Não existem dados do concurso ${concurso}` });
            return;
        }

        res.json(result.rows[0]);
    } catch (e: any) {
        res.status(500).json({ message: e.message });
    }
}