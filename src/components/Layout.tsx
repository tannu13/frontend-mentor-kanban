import Board from "./Board";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Board />
    </div>
  );
}
