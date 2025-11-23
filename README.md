# Pogodowy Stróż - Interfejs Użytkownika

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lovable](https://img.shields.io/badge/Generated%20by-Lovable-ff0055?style=for-the-badge)

Oficjalny klient webowy dla systemu "Pogodowy Stróż". Jest to nowoczesna aplikacja typu SPA (Single Page Application), stworzona przy użyciu platformy Lovable, zapewniająca estetyczny i intuicyjny interfejs czatu do komunikacji z asystentem pogodowym.

---

## 🌟 Kluczowe Funkcjonalności

Interfejs został zaprojektowany z myślą o jak najlepszym User Experience (UX):

* **Nowoczesny Design (Glassmorphism):** Przejrzysty, lekki interfejs inspirowany aplikacjami typu Messenger/iMessage, wykorzystujący nowoczesne komponenty **shadcn/ui**.
* **Interaktywny Czat:**
    * Płynne animacje pojawiania się wiadomości.
    * Wskaźnik "pisania" (typing indicator) symulujący myślenie bota.
    * Rozróżnienie kolorystyczne wiadomości użytkownika i bota.
* **Responsywność (RWD):** Aplikacja działa idealnie zarówno na komputerach stacjonarnych, jak i urządzeniach mobilnych.
* **Dynamiczne Połączenie:** Komunikuje się w czasie rzeczywistym z backendem Python (FastAPI) poprzez REST API.
* **Obsługa Błędów:** Eleganckie powiadomienia (Toasts) w przypadku problemów z połączeniem lub brakiem danych.

---

## 💻 Stos Technologiczny

Aplikacja opiera się na najnowszych standardach webowych:

* **Framework:** [React](https://react.dev/) 18
* **Build Tool:** [Vite](https://vitejs.dev/) (Błyskawiczne ładowanie i budowanie)
* **Język:** [TypeScript](https://www.typescriptlang.org/) (Dla bezpieczeństwa typów)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
* **Ikony:** [Lucide React](https://lucide.dev/)
* **Komponenty UI:** shadcn/ui + Radix UI
* **Generacja:** [Lovable.dev](https://lovable.dev/)

---

## 🚀 Uruchomienie Projektu

Aby uruchomić interfejs, musisz mieć zainstalowane środowisko Node.js oraz działający backend.

### Wymagania Wstępne
1.  **Node.js** (wersja 18 lub nowsza) – [Pobierz tutaj](https://nodejs.org/).
2.  **Działający Backend** "Pogodowy Stróż" (uruchomiony na porcie 8000).

### Instrukcja Krok po Kroku

#### 1. Instalacja zależności
Otwórz terminal w folderze projektu (`frontend-lovable`) i wpisz:

```bash
  npm install
```

#### 2. Uruchomienie serwera deweloperskiego

Aby włączyć podgląd aplikacji, wpisz w terminalu:

```bash
  npm run dev
```


#### 3. Otwórz aplikację

Terminal wyświetli adres lokalny. Kliknij go lub wpisz w przeglądarce:

👉 [http://localhost:5173](http://localhost:5173)

---

### 🔌 Konfiguracja Połączenia

Domyślnie frontend jest skonfigurowany do łączenia się z API pod adresem:

[http://127.0.0.1:8000/chat](http://127.0.0.1:8000/chat)

Jeśli Twój backend działa na innym porcie lub adresie, edytuj plik:

`src/pages/Index.tsx` (lub odpowiedni plik w `src/hooks/`), zmieniając adres w funkcji fetch.

---

### 🆘 Rozwiązywanie Problemów

| **Problem**                       | **Rozwiązanie**                                                        |
|------------------------------------|------------------------------------------------------------------------|
| Network Error / Brak odpowiedzi    | Sprawdź, czy backend działa w drugim oknie terminala.                  |
| Błąd CORS                         | Dodaj `CORSMiddleware` z `allow_origins=["*"]` w pliku `main.py`.      |
| `npm run dev` nie działa           | Zainstaluj zależności: `npm install`.                                  |

---

## Autorzy

Frontend wygenerowany przy wsparciu AI (Lovable), zintegrowany z autorskim backendem Python.
