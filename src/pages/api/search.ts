import { suggestions } from "@/data/searchSuggestions";
import { Suggestion } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Suggestion[] | { error: string }>
) {
  const searchInput = req.query.search as string;

  if (!searchInput) {
    res.status(400).json({ error: "Search input is required." });
    return;
  }

  const matchingSuggestions = suggestions.filter((suggestion) =>
    suggestion.searchterm.toLowerCase().includes(searchInput.toLowerCase())
  );

  res.status(200).json(matchingSuggestions);
}
