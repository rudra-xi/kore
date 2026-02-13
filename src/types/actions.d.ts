/**
 * Represents the state returned by Server Actions.
 * This type is used to track the outcome of asynchronous operations,
 * typically used in conjunction with the `useActionState` (or `useFormState`) hook.
 *
 * @property error - A user-friendly error message for UI display.
 * @property success - Indicates whether the operation completed successfully.
 * @property err - The raw error object or unknown catch-all for debugging purposes.
 */
export type ActionState =
	| {
			error?: string;
			success?: boolean;
			err?: unknown;
	  }
	| null
	| undefined;
