import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";

function Selector() {
  console.log("App Rerender");
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotifcationCount = useRecoilValue(totalNotificationSelector)
  console.log("MainApp Rerender");
  return (
    <div>
      <button>Home</button>
      <button>
        My Network{" "}
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}
      </button>
      <button>Jobs {jobsCount}</button>
      <button>Messages {messageCount}</button>
      <button>Notifications {notificationCount}</button>
      <button>Me {totalNotifcationCount}</button>
      
    </div>
  );
}

export default Selector;
