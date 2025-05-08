import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  AddNotePage,
  ArchivePage,
  SettingsPage,
  SingleNotePage,
  NotFoundPage,
  TrashPage,
} from "../pages/index";
import MainLayout from "../layout/MainLayout";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="add-note-page" element={<AddNotePage />} />
          <Route path="note/:id" element={<SingleNotePage />} />
          <Route path="trash" element={<TrashPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
