// api/security/route.js
import arcjet, { shield, detectBot } from "@arcjet/next";

export const runtime = "nodejs";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [shield({ mode: "LIVE" }), detectBot({ mode: "LIVE" })],
});

export async function POST(req) {
  const decision = await aj.protect(req);
  return Response.json(decision);
}
