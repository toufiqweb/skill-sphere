"use server";

import { serverMutation } from "../core/server";

// Mirrors RapidRole's createSubscription() pattern exactly.
// Forwards transaction data to the Express backend POST /api/transactions.
// Returns { success, message } — idempotency handled in Express.
export const createTransaction = async (txData) => {
  return serverMutation("/api/transactions", txData);
};
