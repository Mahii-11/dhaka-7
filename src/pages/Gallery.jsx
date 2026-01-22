/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {  FaRegCalendarAlt } from "react-icons/fa";
import { FaPlayCircle, FaTimes } from "react-icons/fa";
import { X } from "lucide-react";
//import { getGallery } from "@/services/api";

const categories = ["সকল", "মিছিল", "মিটিং", "কমিউনিটি", "ইভেন্ট"];

/* const videos = [
  {
    title: "জনসভায় গুরুত্বপূর্ণ বক্তব্য",
    description: "জনগণের অধিকার ও উন্নয়ন নিয়ে আমাদের সাম্প্রতিক জনসভা।",
    src: "",
    poster: "/images/image3.jpg",
  },
  {
    title: "উন্নয়ন প্রকল্প পরিদর্শন",
    description: "চলমান উন্নয়ন প্রকল্প সরেজমিনে পরিদর্শনের দৃশ্য।",
    src: "/videos/js-advanced.mp4",
    poster: "/images/image4.jpg",
  },
  {
    title: "স্বেচ্ছাসেবকদের সাথে মতবিনিময়",
    description: "স্বেচ্ছাসেবকদের সাথে গুরুত্বপূর্ণ আলোচনা ও দিকনির্দেশনা।",
    src: "/videos/css-animations.mp4",
    poster: "/images/image5.jpg",
  },
];  */

const videos = [
   {
    id: 1,
    title: "উন্নয়ন প্রকল্প পরিদর্শন",
    description: "চলমান উন্নয়ন প্রকল্প সরেজমিনে পরিদর্শনের দৃশ্য।",
    src: "https://www.youtube.com/embed/QmAQQH7To7w",
    type: "youtube",
    date: "১০ জানুয়ারি ২০২6",
    thumbnail: "/images/thu-1.jpg",
  },
  {
    id: 2,
    title: "উন্নয়ন প্রকল্প পরিদর্শন",
    description: "চলমান উন্নয়ন প্রকল্প সরেজমিনে পরিদর্শনের দৃশ্য।",
    src: "https://www.youtube.com/embed/VUvAkk-D8WE",
    type: "youtube",
    date: "১০ জানুয়ারি ২০২6",
    thumbnail: "/images/thu-2.jpg",
  },
  {
    id: 2,
    title: "উন্নয়ন প্রকল্প পরিদর্শন",
    description: "চলমান উন্নয়ন প্রকল্প সরেজমিনে পরিদর্শনের দৃশ্য।",
    src: "https://www.youtube.com/embed/RWYweOD4A1E",
    type: "youtube",
    date: "১০ জানুয়ারি ২০২6",
    thumbnail: "/images/thu3.jpg",
  },
];



const galleryImages = [
  {
    id: 8,
    category: "হোম",
    image: "/images/image-1.jpg",
  },
  {
    id: 9,
    category: "হোম",
    image: "/images/image-2.jpg",
  },
  {
    id: 10,
    category: "হোম",
    image: "/images/image-3.jpg",
  },
  {
    id: 11,
    category: "হোম",
    image: "/images/image-4.jpg",
  },
  {
    id: 12,
    category: "হোম",
    image: "/images/image-5.jpg",
  },
  {
    id: 13,
    category: "হোম",
    image: "/images/image-6.jpg",
  },
  {
    id: 14,
    category: "মিটিং",
    image: "/images/image-1.jpg",
  },
  {
    id: 15,
    category: "মিটিং",
    image: "/images/image-2.jpg",
  },
];




export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("সকল");
  const [selectedImage, setSelectedImage] = useState(null);
 // const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);


  {
    /*

     useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getGallery();
        const mappedData = data.map((item) => ({
          id: item.id,
          image: item.image,
          category: item.category,
        }));
        setGalleryImages(mappedData);
      } catch (err) {
        console.error("Gallery load error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);


    */
  }

 

  const filteredImages =
    activeCategory === "সকল"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              মুহূর্ত
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
              data-testid="text-biography-title"
            >
              ছবিতে লেখা ইতিহাস
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
            >
              গ্যালারিতে প্রতিটি ছবি একটি গল্প বলে—ইভেন্ট, মিছিল ও সমাজসেবার
              নানা কাজের মুহূর্তগুলো ধরে রাখা হয়েছে।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
            >
              <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

              <p className="relative text-sm md:text-base text-slate-700">
                এই মুহূর্তগুলো শুধু অতীতের স্মৃতি নয়; এটি ভবিষ্যৎ প্রজন্মকে
                প্রেরণা দান করে এবং সমাজে পরিবর্তনের ধারাকে উদ্ভাসিত করে।
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 ${
                    activeCategory === category
                      ? "bg-political-red text-white"
                      : "bg-white text-political-dark border border-political-dark/20"
                  }`}
                  data-testid={`button-gallery-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                    className="group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(image)}
                    data-testid={`img-gallery-item-${image.id}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-political-blue/0 group-hover:bg-political-blue/60 transition-colors duration-300 flex items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          {image.title}
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
     {/*  <VideoGallery /> */}
     <CampaignVideos/>
      <Footer />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image.replace("w=600&h=400", "w=1200&h=800")}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-semibold text-xl">
                  {selectedImage.title}
                </h3>
                <span className="text-white/70 text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-political-yellow transition-colors"
              data-testid="button-close-lightbox"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




export function CampaignVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                onClick={() => setActiveVideo(item)}
                className="overflow-hidden hover-elevate cursor-pointer h-full bg-white border-0 shadow-sm"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/30  group-hover:opacity-100 transition">
                    <FaPlayCircle className="text-white text-6xl opacity-90" />
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3 line-clamp-2 hover:text-political-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-political-dark/70 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-political-dark/60">
                    <FaRegCalendarAlt className="w-4 h-4" />
                    {item.date}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black rounded-xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-white text-xl z-10"
              >
                <FaTimes />
              </button>

              {/* Video */}
              {activeVideo.type === "local" ? (
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full h-[70vh] object-contain bg-black"
                />
              ) : (
                <iframe
                  src={activeVideo.src}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-[70vh]"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}




{

  /*


   function VideoGallery() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-10 text-center">
          দেশের রাজনৈতিক <span className="text-gray-800">র‍্যালি ও সভা</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <video
                controls
                poster={video.poster}
                className="w-full h-52 object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




  */


}