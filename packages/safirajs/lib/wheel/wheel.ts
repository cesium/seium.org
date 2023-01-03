import { API } from "../api";

export async function getWheelPrizes() {
  const response = await API.get("/api/v1/roulette/prizes");

  return response.data;
}

export async function getWheelRedeemables(uuid: string) {
  const response = await API.get(`/api/v1/roulette/redeem/${uuid}`);

  return response.data;
}

export async function getWheelLatestWins() {
  const response = await API.get("/api/v1/roulette/latestwins");

  return response.data;
}

export async function spinWheel() {
  const response = await API.post("/api/v1/roulette");

  await new Promise((r) => setTimeout(r, 5000));

  return response.data;
}
