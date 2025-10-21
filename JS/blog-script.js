// // Set current year
// document.getElementById("year").textContent = new Date().getFullYear();

// // Fetch Medium posts
// async function fetchMediumPosts() {
//   const username = "themannyverse"; // Your Medium username
//   const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;

//   try {
//     const response = await fetch(rssUrl);
//     const data = await response.json();

//     if (data.status === "ok") {
//       displayPosts(data.items);
//     } else {
//       showError();
//     }
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     showError();
//   }
// }

// function displayPosts(posts) {
//   const postsContainer = document.getElementById("posts");
//   const loading = document.getElementById("loading");

//   loading?.classList.add("hidden");
//   postsContainer?.classList.remove("hidden");

//   posts.forEach((post) => {
//     const postCard = createPostCard(post);
//     postsContainer.appendChild(postCard);
//   });
// }

// function createPostCard(post) {
//   const card = document.createElement("article");
//   card.className = "blog-card rounded-xl p-6 flex flex-col";

//   // Extract all images from content
//   const imgRegexGlobal = /<img.*?src="(.*?)"/g;
//   let imgMatch;
//   let imageUrl = "";
//   const fallbackImage = "/ASSETS/fallback_image_for_medium.jpg"; // your local fallback image

//   while ((imgMatch = imgRegexGlobal.exec(post.content)) !== null) {
//     const src = imgMatch[1];
//     // Ignore Medium tracking pixels
//     if (!src.includes("medium.com/_/stat")) {
//       imageUrl = src;
//       break;
//     }
//   }

//   // Use fallback if no image found
//   if (!imageUrl) {
//     imageUrl = fallbackImage;
//   }

//   // Extract text preview
//   const textContent = post.content.replace(/<[^>]+>/g, "").substring(0, 150);

//   // Format date
//   const date = new Date(post.pubDate).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });

// card.innerHTML = `
//   <div class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-purple-700/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">

//     <!-- Image -->
//     <div class="overflow-hidden">
//       <img
//         src="${imageUrl}"
//         alt="${post.title}"
//         class="w-full h-48 object-cover px-2 rounded-lg transform scale-105 group-hover:scale-110 transition-transform duration-700"
//       />
//     </div>

//     <!-- Content -->
//     <div class="flex-1 p-6 flex flex-col">
//       <p class="text-purple-400 text-sm mb-2">${date}</p>
//       <h2 class="text-xl font-bold mb-3 line-clamp-2">${post.title}</h2>
//       <p class="text-gray-400 text-sm mb-4 line-clamp-3">${textContent}...</p>

//       <!-- Button at bottom -->
//       <a
//         href="${post.link}"
//         target="_blank"
//         rel="noopener noreferrer"
//         class="mt-auto inline-block px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500/10 text-sm text-center transition"
//       >
//         Read More →
//       </a>
//     </div>
//   </div>
// `;

//   return card;
// }

// function showError() {
//   document.getElementById("loading")?.classList.add("hidden");
//   document.getElementById("error")?.classList.remove("hidden");
// }

// // Initialize
// fetchMediumPosts();

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Fetch Medium posts
async function fetchMediumPosts() {
  const username = "themannyverse";
  const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;

  try {
    const response = await fetch(rssUrl);
    const data = await response.json();

    if (data.status === "ok") {
      displayPosts(data.items);
    } else {
      showError();
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    showError();
  }
}

// Display posts in grid
function displayPosts(posts) {
  const postsContainer = document.getElementById("posts");
  const loading = document.getElementById("loading");

  loading.classList.add("hidden");
  postsContainer.classList.remove("hidden");

  // First, render Medium posts
  posts.forEach((post) => {
    postsContainer.appendChild(createMediumCard(post));
  });

  // Then, render LinkedIn posts
  const linkedInPosts = [
    {
      embed:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7374477308092600320?collapsed=1",
      title: "LinkedIn Post",
      content:
        "Last week I decided to learn Tailwind CSS. This is how it went...",
      pubDate: new Date().toISOString(),
      link: "https://www.linkedin.com/posts/emmanuel-onwuka-5a3a95303_tailwindcss-webdevelopment-learningjourney-activity-7374477309107425281-MWUO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE2UpgsBipcX07M6YTND_XDZ-U1Wp4-sbSE",
    },
    // {
    //   embed:
    //     "https://www.linkedin.com/embed/feed/update/urn:li:share:7374477308092600320?collapsed=1",
    //   title: "LinkedIn Post Example",
    //   content: "Check out this LinkedIn post!",
    //   pubDate: new Date().toISOString(),
    //   link: "https://www.linkedin.com/feed/",
    // },
  ];

  linkedInPosts.forEach((post) => {
    postsContainer.appendChild(createLinkedInCard(post));
  });
}

// Create Medium post card
function createMediumCard(post) {
  const card = document.createElement("article");
  card.className = "blog-card rounded-xl p-6 flex flex-col";

  // Extract all images from content
  const imgRegexGlobal = /<img.*?src="(.*?)"/g;
  let imgMatch;
  let imageUrl = "";
  const fallbackImage = "/ASSETS/fallback_image_for_medium.jpg"; // your local fallback image

  while ((imgMatch = imgRegexGlobal.exec(post.content)) !== null) {
    const src = imgMatch[1];
    // Ignore Medium tracking pixels
    if (!src.includes("medium.com/_/stat")) {
      imageUrl = src;
      break;
    }
  }

  // Use fallback if no image found
  if (!imageUrl) {
    imageUrl = fallbackImage;
  }

  // Extract text preview
  const textContent = post.content.replace(/<[^>]+>/g, "").substring(0, 150);

  // Format date
  const date = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  card.innerHTML = `
    <div class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-purple-700/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">
      
      <!-- Image -->
      <div class="overflow-hidden">
        <img 
          src="${imageUrl}" 
          alt="${post.title}" 
          class="w-full h-48 object-cover px-2 rounded-lg transform scale-105 group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <!-- Content -->
      <div class="flex-1 p-6 flex flex-col">
        <p class="text-purple-400 text-sm mb-2">${date}</p>
        <h2 class="text-xl font-bold mb-3 line-clamp-2">${post.title}</h2>
        <p class="text-gray-400 text-sm mb-4 line-clamp-3">${textContent}...</p>
        
        <!-- Button at bottom -->
        <a href="${post.link}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="mt-auto inline-block px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500/10 text-sm text-center transition">
          Read More →
        </a>
      </div>
    </div>
  `;
  return card;
}

// Create LinkedIn post card
function createLinkedInCard(post) {
  const card = document.createElement("article");
  card.className = "blog-card rounded-xl p-6 flex flex-col";

  // Format date
  const date = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  card.innerHTML = `
    <div class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-purple-700/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">
      
      <!-- LinkedIn iframe -->
      <div class="overflow-hidden">
        <iframe src="${post.embed}" 
          class="w-full h-48 border-0 rounded-lg "
          allowfullscreen=""
          loading="lazy"
          title="${post.title}">
        </iframe>
      </div>

      <!-- Content -->
      <div class="flex-1 p-6 flex flex-col">
        <p class="text-purple-400 text-sm mb-2">${date}</p>
        <h2 class="text-xl font-bold mb-3 line-clamp-2">${post.title}</h2>
        <p class="text-gray-400 text-sm mb-4 line-clamp-3">${post.content}</p>
        
        <!-- Button at bottom -->
        <a href="${post.link}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="mt-auto inline-block px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500/10 text-sm text-center transition">
          View on LinkedIn →
        </a>
      </div>
    </div>
  `;
  return card;
}

// Show error
function showError() {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("error").classList.remove("hidden");
}

// Initialize
fetchMediumPosts();
