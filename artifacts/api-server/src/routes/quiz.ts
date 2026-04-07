import { Router } from "express";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const router = Router();
const DATA_DIR = path.resolve(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "quiz-submissions.json");

function loadSubmissions(): object[] {
  if (!existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function saveSubmissions(submissions: object[]) {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));
}

router.post("/submissions", (req, res) => {
  try {
    const { email, score, answers, submittedAt } = req.body;
    if (!email || typeof email !== "string") {
      res.status(400).json({ error: "Email is required" });
      return;
    }
    const submission = {
      id: Date.now().toString(),
      email: email.trim().toLowerCase(),
      score,
      answers,
      submittedAt: submittedAt || new Date().toISOString(),
    };
    const submissions = loadSubmissions();
    submissions.push(submission);
    saveSubmissions(submissions);
    res.json({ success: true, id: submission.id });
  } catch {
    res.status(500).json({ error: "Failed to save submission" });
  }
});

router.get("/submissions", (_req, res) => {
  res.json(loadSubmissions());
});

export default router;
