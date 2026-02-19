/**
 * ActionState
 *
 * Represents the state structure returned by Next.js Server Actions.
 * Used to synchronize server-side results with the UI, typically via the `useActionState` hook.
 *
 * @property error - A human-readable error string for display in the UI.
 * @property success - A flag indicating whether the operation was performed successfully.
 * @property err - The raw error object for logging or low-level debugging.
 * @property message - A general-purpose message (e.g., a success confirmation).
 * @property details - Supplementary data or metadata related to the action's outcome.
 */
export type ActionState =
	| {
			error?: string | null;
			success?: boolean;
			err?: unknown;
			message?: string;
			details?: unknown;
	  }
	| null
	| undefined;
