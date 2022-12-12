import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId; // 동적 라우팅 파일명 활용
  filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectdFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectdFeedback });
}

export default handler;
