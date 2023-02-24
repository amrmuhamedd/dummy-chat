import React, { useEffect } from "react";

// scss
import "./assets/scss/theme.scss";

// actions
import { useSelector, useDispatch } from "react-redux";
import { changelayoutMode } from "./redux/actions";

//Route
import Routes from "./routes";
import { initFirebaseBackend } from "./helpers/firebase_helper";

// Import Firebase Configuration file

//api config
// import config from "./config";
import fakeBackend from "./helpers/fakeBackend";


// TODO
fakeBackend();

const firebaseConfig = {
  apiKey: "AIzaSyA0HM4vN-Few4XnH3_2DpUn_tO0STD85Ug",
  authDomain: "chat-c7f9b.firebaseapp.com",
  projectId: "chat-c7f9b",
  storageBucket: "chat-c7f9b.appspot.com",
  messagingSenderId: "423530192408",
  appId: "1:423530192408:web:6a44064a7f4eaa500b6d6d"
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

const App = () => {
  const dispatch = useDispatch();

  const { layoutMode } = useSelector((state: any) => ({
    layoutMode: state.Layout.layoutMode,
  }));

  // Dark/Light Mode 
  useEffect(() => {
    var getLayoutMode = localStorage.getItem("layoutMode");
    if (getLayoutMode) {
      dispatch(changelayoutMode(getLayoutMode));
    } else {
      dispatch(changelayoutMode(layoutMode));
    }
  }, [layoutMode, dispatch]);

  return <Routes />;
};

export default App;
