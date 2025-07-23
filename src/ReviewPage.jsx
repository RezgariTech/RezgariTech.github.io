import MovieGrid from "./components/MovieGrid";
import { useEffect } from "react";

function ReviewPage() {

  useEffect(() => {
    document.title = "Sweet and Sour Screen — Reviews";
  }, []);

  return (
    <div className="bg-[#E6F6E6] min-h-screen">
      <MovieGrid />
    </div>
  );
}

export default ReviewPage;
