import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const OAuth = () => {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider )
      console.log(result);

    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      continue with google
    </button>
  );
};

export default OAuth;
