import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideBar from "./pages/SideBar";
import UploadTests from "./pages/UploadTests";
import { ChakraProvider } from "@chakra-ui/react";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";
import Papers from "./pages/Papers";
import Discussion from "./pages/Discussion";
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        

        <Route
          path="/UploadTests"
          element={
            <>
              <SideBar>
                <UploadTests />
              </SideBar>
            </>
          }
        />

        <Route
          path="/Papers"
          element={
            <>
              <SideBar>
                <Papers />
              </SideBar>
            </>
          }
        />

        <Route
          path="/Articles"
          element={
            <>
              <SideBar>
                <Articles />
              </SideBar>
            </>
          }
        />

        <Route
          path="/Discussion_Forum"
          element={
            <>
              <SideBar>
                <Discussion />
              </SideBar>
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <SideBar>
              <Profile />
            </SideBar>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}
export default App;
