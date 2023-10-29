import React from "react";
import {FormEdit} from "./FormEdit";
import {WaiterList} from "./WaiterList";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../NotFound";

export function WaitersApp() {
    return (
        <Routes>
            <Route path="/" element={<WaiterList />} />
            <Route path="/create" element={<FormEdit />} />
            <Route path="/edit/:id" element={<FormEdit />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}