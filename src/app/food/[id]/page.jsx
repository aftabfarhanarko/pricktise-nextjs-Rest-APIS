import React from "react";
// export function generateStaticParams() {
//   return [{ id: '52834' }, { id: '52768' }, { id: '52937' }]
// }

const getSingelFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      next: { revalidate: 2000 },
    }
  );
  const data = await res.json();

  return data.details;
};
const Detlisepage = async ({ params }) => {
  const { id } = await params;
  const { title, category, area, price, foodImg, video } = await getSingelFood(
    id
  );
  // console.log(detlise);
  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(video);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold mb-4 transition-colors duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Menu
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-bold border border-amber-500/30">
                {category}
              </span>
              <span className="bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-500/30">
                {area} Cuisine
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Image */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={foodImg}
                  alt={title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Price Badge on Image */}
                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl shadow-2xl">
                  <div className="text-sm font-semibold">Price</div>
                  <div className="text-3xl font-black">৳{price}</div>
                </div>

                {/* ID Badge */}
                <div className="absolute top-6 right-6 backdrop-blur-md bg-white/20 border border-white/30 text-white px-4 py-2 rounded-xl text-sm font-bold">
                  #ID {id}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </span>
                </button>

                <button className="bg-stone-700 hover:bg-stone-600 text-white font-bold p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <button className="bg-stone-700 hover:bg-stone-600 text-white font-bold p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-5xl font-black text-white mb-4 leading-tight">
                  {title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-bold text-lg">4.9</span>
                  <span className="text-stone-400">(234 reviews)</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Description
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  Experience the authentic taste of {area} cuisine with our{" "}
                  {title}. This delicious {category.toLowerCase()} dish is
                  carefully prepared with premium ingredients and traditional
                  cooking methods to bring you the most authentic flavors.
                  Perfect for any occasion!
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/30 p-3 rounded-xl">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold">Fresh</div>
                      <div className="text-stone-400 text-sm">Daily Made</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/30 p-3 rounded-xl">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-blue-400 font-bold">Fast</div>
                      <div className="text-stone-400 text-sm">30-45 mins</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/30 p-3 rounded-xl">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-purple-400 font-bold">Quality</div>
                      <div className="text-stone-400 text-sm">Premium</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500/30 p-3 rounded-xl">
                      <svg
                        className="w-6 h-6 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold">Hot</div>
                      <div className="text-stone-400 text-sm">Spicy Level</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          {videoId && (
            <div className="mb-12">
              <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-500/20 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black text-white">
                    Watch How to Make It
                  </h2>
                </div>

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">Best Value</h3>
              </div>
              <p className="text-stone-400">
                Premium quality ingredients at an affordable price point.
              </p>
            </div>

            <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">Guaranteed</h3>
              </div>
              <p className="text-stone-400">
                100% satisfaction guarantee or your money back.
              </p>
            </div>

            <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">Fast Delivery</h3>
              </div>
              <p className="text-stone-400">
                Quick delivery to your doorstep in 30-45 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detlisepage;
