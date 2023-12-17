import * as React from "react";
import { GlobalContext } from "../context/GlobalContext";
import Button from "@mui/material/Button";

type Props = {
  fallback: React.ReactNode;
  showrerender: boolean;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<Props>,
  State
> {
  // Set the context (class component)
  static contextType = GlobalContext;
  // context!: React.ContextType<typeof GlobalContext>;

  public state: State = { hasError: false };

  // constructor(props: React.PropsWithChildren<Props>) {
  //   super(props);
  // }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
    const { showError } = this.context as React.ContextType<
      typeof GlobalContext
    >;
    showError(error.message);
    // showError(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          {this.props.fallback}
          {this.props.showrerender && (
            <Button
              variant="outlined"
              onClick={() => this.setState({ hasError: false })}
            >
              Re-render
            </Button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
