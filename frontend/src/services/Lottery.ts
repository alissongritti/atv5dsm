import { LotteryProps } from "../types";
import api from "./api";

export async function getLottery(): Promise<LotteryProps> {
    await delay(2000);
    const { data } = await api.get("/");
    return data;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));