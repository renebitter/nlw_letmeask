import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Q&amp;A" />
        <strong>Create live Q&amp;A chat rooms</strong>
        <p>Answer your audience's questions in real time</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create a new chat room</h2>
          <form>
            <input type="text" placeholder="Chat room name" />
            <Button type="submit">Create chat room</Button>
          </form>
          <p>
            Enter an existing chat room? <Link to="/">click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
