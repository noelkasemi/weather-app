export default function SearchResultCard ({results, setWeatherData, show, setCityName}) {

    const handleResultClick = (result) => {
        setCityName(result.name);
        setWeatherData(null); // Reset weather data before fetching new data
      };
    
    return (
        <>
        {show && (
          <section className="bg-white absolute top-24 w-1/3 z-10 h-fit p-4 rounded space-y-3">
            <p className="text-gray-400">Choose a location:</p>
            <ul className="space-y-2">
              {results.map((result) => (
                <li
                  className="hover:bg-gray-300 cursor-pointer px-2 py-1 "
                  key={result.lat + result.lon}
                  onClick={() => handleResultClick(result)}
                >
                  {result.name}, {result.state}, {result.country}
                </li>
              ))}
            </ul>
          </section>
        )}
      </>
    )
}