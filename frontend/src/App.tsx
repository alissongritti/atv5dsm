import { Megasena } from "./pages/Megasena";
import { GlobalStyle } from "./styles/global";
import { LotteryProvider } from "./contexts/LotteryContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LotteryProvider>
        <GlobalStyle />
        <Megasena />
      </LotteryProvider>
    </ThemeProvider>
  );
}

export default App;