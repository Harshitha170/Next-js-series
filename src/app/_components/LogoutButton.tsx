"use client";

import React from "react";
import { logoutAction } from "../actions/auth";

const LogoutButton = () => {
    return (
        <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
            onClick={() => logoutAction()}
        >
            Logout
        </button>
    );
};

export default LogoutButton;