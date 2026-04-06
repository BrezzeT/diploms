import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  stages: [
    { duration: "20s", target: 50 }, // Швидко піднімаємо до 50 людей
    { duration: "30s", target: 50 }, // Тримаємо 50 людей
    { duration: "10s", target: 0 }, // Охолоджуємо
  ],
};

export default function Test() {
  const res = http.get("http://localhost:3000/catalog");

  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1);
}
