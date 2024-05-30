import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import {
  notifications,
  todoFamilyAtom,
  todoSelectorAtom,
  totalNotificationSelector,
} from "./atoms";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);

  // useEffect(() => {
  // axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
  // setNetworkCount(res.data);
  // });
  // }, []);

  const notificationCount = useRecoilValue(totalNotificationSelector);

  console.log(networkCount);
  return (
    <div>
      <button>Home </button>
      <button>Network {networkCount.network} </button>
      <button>Jobs {networkCount.jobs} </button>
      <button>Messaging {networkCount.messaging} </button>
      <button>Notifications {networkCount.notifications}</button>
      <button>Me {notificationCount}</button>
      <br />
      <br />
      <br />

      <TodoRender id={1} />
      <TodoRender id={2} />
    </div>
  );
}

// function TodoRender({id}){
//   // const todo = useRecoilValue(todoFamilyAtom(id));
//   const todo = useRecoilValue(todoSelectorAtom(id))
//   return(
//     <div>
//       <div>{todo.title}</div>
//       <div>{todo.description}</div>
//     </div>
//   )
// }

//useRecoilValueloadable

function TodoRender({ id }) {
  const todo = useRecoilValueLoadable(todoSelectorAtom(id));
  console.log("renderTodo", todo.state);
  if (todo.state === "loading") {
    return <div>........loading</div>;
  } else if (todo.state === "hasValue") {
    return (
      <div>
        <div>{todo.contents.title}</div>
        <div>{todo.contents.description}</div>
      </div>
    );
  } else if (todo.state === "hasError"){
    return <div>
      Error while getting data from backend
    </div>
  }
}

export default App;
