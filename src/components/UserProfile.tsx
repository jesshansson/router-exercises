import { useParams } from "react-router-dom";

export function UserProfile() {
  const { id } = useParams<{ id: string }>();

  return (
    <main>
      <h2>User Profile</h2>
      <p>User ID: {id}</p> {/* Visar användar-ID:t */}
    </main>
  );
}
