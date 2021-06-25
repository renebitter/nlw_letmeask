import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

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

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google logo" />
            Create your chat room using Google
          </button>

          <div className="separator">or enter a chat room</div>

          <form>
            <input type="text" placeholder="Type chat room code" />
            <Button type="submit">Enter chat room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
