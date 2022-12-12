import { buildFeedbackPath, extractFeedback } from "../api/feedback";
// next.js는 이를 getStaticProps에서 사용되는 걸 암지하고  client bundle에 포함시키지 않음

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
