import * as React from "react";
import { GlobalContext } from "../context/GlobalContext";
import Button from "@mui/material/Button";

class ErrorBoundary extends React.Component {
  // Set the context (class component)
  static contextType = GlobalContext;

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
    const { showError } = this.context;
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
