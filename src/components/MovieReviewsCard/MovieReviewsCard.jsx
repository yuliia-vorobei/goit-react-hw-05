export default function MovieReviewsCard({ reviews }) {
  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <div>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
