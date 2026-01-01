import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

type GenerationResponse = {
    cells?: boolean[];
    generation?: number;
    census?: number;
};

export async function fetchNextGeneration(): Promise<GenerationResponse> {
    const url = `${BACKEND_URL}/next_generation`;
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (err: any) {
        const detail = err.response?.data ?? err.message ?? "Unknown error";
        throw new Error(`Failed to fetch next generation: ${JSON.stringify(detail)}`);
    }
}