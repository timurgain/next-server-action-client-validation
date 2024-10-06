export default function ProtectedPage() {
  return (
    <>
      <h1>Protected Page</h1>
      <p>This page should be available only if a user is authanticated.</p>
      <p>If not, the user should be redirected to Sign In page.</p>
    </>
  );
}
