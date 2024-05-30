import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom } from "./atoms";

function App() {
  
  console.log("App Rerender")
  return (
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
      
    </div>
  );
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messageCount,setMessageCount] = useRecoilState(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  console.log("MainApp Rerender")
  return (
    <div>
      <button>Home</button>
      <button style={{ backgroundColor: "brown", color: "white", margin: 10 }}>
        My Network{" "}
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}
      </button>
      <button>Jobs {jobsCount}</button>
      <button>Messages {messageCount}</button>
      <button>Notifications {notificationCount}</button>
      <button onClick={()=>setMessageCount(c=>c+1)}>Me</button>
      <br /><br /><br />
      <NotificationUpdater/>
    </div>
  );

}

function NotificationUpdater(){
  const setNotificationCount = useSetRecoilState(notificationAtom)
  console.log("Button Rerender")
  return(
    <div>
      <button onClick={()=>setNotificationCount(c=>c+1)}>Update Notification</button>

    </div>
  )
}

export default App;
