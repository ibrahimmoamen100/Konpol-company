export default function Error({ statusCode }) {
  return (
    <p className="">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}
