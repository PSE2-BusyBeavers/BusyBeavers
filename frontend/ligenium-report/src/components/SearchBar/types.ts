import { InputProps } from "@mui/material";
import { ReactElement } from "react";

export interface ISearchBarProps extends Omit<InputProps, 'fullWidth'> {
  /** Whether to clear search on escape */
  cancelOnEscape?: boolean;
  /** Override the close icon. */
  closeIcon?: ReactElement;
  /** Disables text field. */
  disabled?: boolean;
  /** Fired when the search is cancelled. */
  onCancelSearch: () => void;
  /** Fired when the search icon is clicked. */
  onRequestSearch?: (input: string) => void;
  /** Sets placeholder text for the embedded text field. */
  placeholder?: string;
  /** Override the search icon. */
  searchIcon?: ReactElement;
  /** The value of the text field. */
  value: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  searchButtonOrder?: number;
  clearButtonOrder?: number;
}