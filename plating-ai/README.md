# PLATING AI — FULL SIMPLE WEBSITE

Versi ini sengaja dibuat **chat-first**. Operator TIDAK perlu mengisi Quick Bath/form ketika membuka website.

Alur:
1. Operator mengetik masalah dengan bahasa biasa.
2. AI menjawab.
3. Bila data teknis diperlukan, AI yang meminta data yang relevan.
4. Operator memberikan data tersebut dalam chat.
5. AI melanjutkan analisis.

Project sudah berisi backend Node.js, SQLite, frontend futuristik dan Rule Mode.
Untuk AI, isi OPENAI_API_KEY pada `.env`.

Jalankan:
npm install
cp .env.example .env
npm start

Buka:
http://localhost:3000

PENTING:
Baseline teknis tidak mengarang dosis chemical supplier-specific. Target parameter dan formula koreksi nyata harus berasal dari SDS/TDS, hasil analisa bath, dan SOP/teknisi kompeten. Chrome yang menggunakan Cr(VI) memerlukan kontrol paparan yang ketat.
