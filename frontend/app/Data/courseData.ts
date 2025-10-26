export type Course = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  instructor: string;
  duration: string;
  price: string;
  isPopular?: boolean;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "MERN Stack Web Development",
    category: "Web Development",
    image: "/MERN.webp",
    description:
      "Build full-stack web apps using MongoDB, Express.js, React, and Node.js. Learn to design scalable web applications with real-world projects.",
    instructor: "John Doe",
    duration: "12 Weeks",
    price: "$199",
    isPopular: true,
  },
  {
    id: 2,
    title: "Graphic Design Mastery",
    category: "Design",
    image: "/graphic-designer.webp",
    description:
      "Master Adobe Photoshop, Illustrator, and InDesign. Create beautiful digital art, branding, and professional visuals.",
    instructor: "Jane Smith",
    duration: "8 Weeks",
    price: "$149",
    isPopular: true,
  },
  {
    id: 3,
    title: "SEO & Digital Marketing",
    category: "Marketing",
    image: "/seo.png",
    description:
      "Learn effective SEO, Google Ads, and social media marketing strategies to grow online visibility and traffic.",
    instructor: "Chris Evans",
    duration: "6 Weeks",
    price: "$129",
    isPopular: true,
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "IT & Software",
    image: "/python.jpg",
    description:
      "Analyze data using Pandas, NumPy, and Matplotlib. Build real-world data analysis and visualization projects.",
    instructor: "Sarah Johnson",
    duration: "10 Weeks",
    price: "$179",
  },
  {
    id: 5,
    title: "React Native App Development",
    category: "Mobile Development",
    image: "/react-native.webp",
    description:
      "Learn to build cross-platform mobile applications using React Native. Deploy apps for Android and iOS.",
    instructor: "David Lee",
    duration: "10 Weeks",
    price: "$189",
    isPopular: false,
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    image: "/uiux.webp",
    description:
      "Understand user experience principles, wireframing, and prototyping using Figma and Adobe XD.",
    instructor: "Emma Wilson",
    duration: "7 Weeks",
    price: "$159",
    isPopular: false,
  },
];
