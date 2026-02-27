import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Footer, Rules } from "./components";
import { Menu } from "./ui";
import FullPageSpinner from "./FullPageSpinner";
import FrontPage from "./ui/FrontPage";
import { GroupView, GroupsView } from "./components/Groups";
import { MatchView, MatchesView } from "./components/Matches";
import LeaderBoardView from "./components/Leaderboard/LeaderBoardView";
import UserView from "./components/Leaderboard/UserView";
import { getToken } from "./api/queries";
import Unauthenticated from "./ui/Unauthenticated";

const queryClient = new QueryClient();

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function AppRoutes() {
  const token = getToken();
  const isAuthenticated = Boolean(token);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <div className="flex h-screen flex-col grow">
          <Menu />
          <div className="relative flex grow flex-col pt-20">
            <Suspense fallback={<FullPageSpinner />}>
              <Routes>
                <Route path="/groups/:id" element={<GroupView />} />
                <Route path="/groups" element={<GroupsView />} />
                <Route path="/matches" element={<MatchesView />} />
                <Route path="/matches/:id" element={<MatchView />} />
                <Route path="/standings" element={<LeaderBoardView />} />
                <Route path="/user/:id" element={<UserView />} />
                <Route path="/" element={<FrontPage />} />
                <Route path="/rules" element={<Rules />} />
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      ) : (
        <Unauthenticated />
      )}
    </BrowserRouter>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
