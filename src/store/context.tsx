import { createContext, useContext } from "react";
import { contextData } from "./types";

const Context = createContext<contextData|null>(null);

export default Context;