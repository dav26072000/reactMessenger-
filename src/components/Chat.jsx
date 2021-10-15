import { useHistory } from "react-router";
import swal from "sweetalert";
import { loginPageRoute } from "../constants/routes";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

export default function Chat() {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();

  // currentUser ? history.push(loginPageRoute) : none;

  return (
    <>
      {currentUser ? (
        <div className="w-3/4">
          <div className="bg-white shadow">
            <div className="flex h-full" style={{ maxHeight: "600px" }}>
              Chat page
            </div>
            <Button
              buttonName="SignOut"
              color="blue"
              onClick={() => {
                signOut().then(() => {
                  history.push(loginPageRoute);
                });
              }}
            />
          </div>
        </div>
      ) : (
        history.push(loginPageRoute)
      )}
    </>
  );
}
