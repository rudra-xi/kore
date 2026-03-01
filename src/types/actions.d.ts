/**
 * ActionState
 *
 * Represents the state structure returned by Next.js Server Actions.
 * This type is designed to synchronize server-side results with the UI,
 * commonly utilized with the `useActionState` hook for managing pending, success,
 * and error states of asynchronous operations triggered from the client.
 *
 * @property {string | null} [error] - A human-readable error message for display in the UI. Null if no error.
 * @property {boolean | undefined} [success] - A flag indicating whether the server action operation was performed successfully.
 * @property {unknown} [err] - The raw error object, useful for logging or low-level debugging on the server.
 * @property {string | undefined} [message] - A general-purpose message string, often used for success confirmations or brief status updates.
 * @property {unknown} [details] - Supplementary data or metadata related to the action's outcome, which can be anything from API responses to specific data payloads.
 * @property {string | undefined} [role] -  Potentially used to convey user role information related to the action's context or result.
 * @property {string | undefined} [data] -  Can hold specific data returned by the action, often a string representation or identifier.
 */
export type ActionState =
	| {
			error?: string | null;
			success?: boolean;
			err?: unknown;
			message?: string;
			details?: unknown;
			role?: string;
			data?: string;
	  }
	| null
	| undefined;
