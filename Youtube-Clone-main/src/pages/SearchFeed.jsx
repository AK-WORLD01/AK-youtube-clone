
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchById } from "../redux/searchSlice";
import { setSidebarExtendedValue } from "../redux/categorySlice"; // Added import
import timeSince from "../utils/date";

function SearchFeed() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchResults } = useSelector((state) => state.search);
  const { sidebarExtend } = useSelector((state) => state.category);
  const { isDark } = useSelector((state) => state.darkMode);
  const aDay = 24 * 60 * 60 * 1000;

  useEffect(() => {
    if (id) {
      dispatch(searchById(`search?part=snippet&q=${id}`));
    }
  }, [id, dispatch]);

  const handleOverlayClick = () => {
    dispatch(setSidebarExtendedValue(false));
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 sm:hidden ${
          sidebarExtend ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Search Results */}
      <div
        className={`pt-20 px-4 transition-all duration-300 ${
          sidebarExtend ? "sm:pl-60" : "sm:pl-16"
        } ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-y-6">
          {searchResults?.length > 0 ? (
            searchResults.map((result, index) => {
              const { id, snippet } = result;
              if (!id?.videoId || !snippet) return null;

              return (
                <div
                  key={`${id.videoId}-${index}`}
                  className="flex flex-col sm:flex-row gap-4 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
                  onClick={() => navigate(`/watch/${id.videoId}`)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Watch ${snippet.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate(`/watch/${id.videoId}`);
                    }
                  }}
                >
                  {/* Thumbnail */}
                  <div className="w-full sm:w-1/3 md:w-1/4 flex-shrink-0">
                    <img
                      src={snippet.thumbnails?.medium?.url || ""}
                      alt={`${snippet.title} thumbnail`}
                      className="w-full rounded-lg object-cover"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/320x180?text=No+Thumbnail")}
                    />
                  </div>

                  {/* Video Details */}
                  <div className="flex-1">
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-medium leading-5 sm:leading-6 md:leading-7 ${
                        isDark ? "text-white" : "text-gray-900"
                      } line-clamp-2`}
                    >
                      {snippet.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {timeSince(new Date(Date.parse(snippet.publishedAt) - aDay))}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/channel/${snippet.channelId}`);
                      }}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mt-1"
                      aria-label={`Visit ${snippet.channelTitle} channel`}
                    >
                      {snippet.channelTitle}
                    </button>
                    <p
                      className={`text-sm mt-2 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      } line-clamp-2`}
                    >
                      {snippet.description?.slice(0, 124) || "No description available"}...
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No results found for "{id}"
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchFeed;
