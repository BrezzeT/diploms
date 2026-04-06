import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  stages: [
    { duration: "10s", target: 10 }, // Розганяємось з 0 до 10 користувачів за 10 сек
    { duration: "20s", target: 10 }, // Тримаємо 10 користувачів протягом 20 сек
    { duration: "10s", target: 0 }, // Поступово зупиняємось
  ],
};

export default function Test() {
  const res = http.get("http://localhost:3000/catalog");
  const body = res.body || "";

  check(res, {
    "status is 200": (r) => r.status === 200,
    "page has catalog title": () => body.includes("Каталог"),
  });

  sleep(1);
}
