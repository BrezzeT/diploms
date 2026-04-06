import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,
  duration: "10s",
  thresholds: {
    http_req_failed: ["rate<0.01"], // Менше 1% помилок
    http_req_duration: ["p(95)<500"], // 95% запитів мають бути швидше 500мс
  },
};

export default function Test() {
  // 1. Заходимо на Головну сторінку
  const homeRes = http.get("http://localhost:3000/");
  check(homeRes, {
    "home status is 200": (r) => r.status === 200,
    "home has welcome text": (r) => r.body.includes("Store"),
  });
  sleep(1);

  // 2. Переходимо в Каталог
  const catalogRes = http.get("http://localhost:3000/catalog");
  check(catalogRes, {
    "catalog status is 200": (r) => r.status === 200,
    "catalog has title": (r) => r.body.includes("Каталог"),
  });
  sleep(1);

  // 3. Спроба зайти в Адмін-панель
  const adminRes = http.get("http://localhost:3000/admin");
  check(adminRes, {
    "admin page is reachable": (r) => r.status === 200 || r.status === 302, // 302 якщо є редирект
  });
  sleep(1);
}
