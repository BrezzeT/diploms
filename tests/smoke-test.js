import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  vus: 1,
  duration: "10s",
};

export default function Test() {
  const res = http.get("http://localhost:3000/catalog");

  // Додаємо перевірку: якщо res.body порожній, ставимо порожній рядок ""
  const body = res.body || "";

  check(res, {
    "status is 200": (r) => r.status === 200,
    "page has catalog title": () => body.includes("Каталог"),
  });

  // Пауза 1 секунда тепер буде працювати навіть при помилках
  sleep(1);
}
