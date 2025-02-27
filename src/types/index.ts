import React from "react";
import { Code, Search, Database } from "lucide-react";

export type Endpoint = "repositories" | "query" | "search";

export type EndpointInfo = {
  name: Endpoint;
  title: string;
  description: string;
  icon: React.ReactNode;
  fields: {
    name: string;
    label: string;
    type: "text" | "textarea";
    placeholder: string;
    required: boolean;
  }[];
};

export type HistoryItem = {
  id: string;
  endpoint: Endpoint;
  request: Record<string, string>;
  response: string;
  timestamp: Date;
};
