export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Plain Shirt",
    category: "MEN",
    image: "/plain-1.png",
    description:
      "A versatile essential for every wardrobe. This premium plain white shirt is crafted from high-quality fabric, offering a clean, sharp look that transitions seamlessly from office to evening.",
  },
  {
    id: 2,
    title: "Classic Gingham Check Shirt",
    category: "MEN",
    image: "/check-1.png",
    description:
      "Elevate your casual style with our Gingham Check Shirt. Featuring a timeless pattern and a perfect fit, it's designed for the modern man who values both tradition and trend.",
  },
  {
    id: 3,
    title: "Sophisticated Stripe Shirt",
    category: "MEN",
    image: "/stripe-1.png",
    description:
      "Make a statement with our Sophisticated Stripe Shirt. The subtle vertical stripes provide a slimming effect and a touch of elegance to your professional ensemble.",
  },
  {
    id: 4,
    title: "Signature Print Shirt",
    category: "MEN",
    image: "/manzo-print-shirt-1.png",
    description:
      "Uniquely Manzo, our Signature Print Shirts feature exclusive designs that stand out. Comfortable, stylish, and perfect for making a lasting impression.",
  },
  {
    id: 5,
    title: "Modern Slim Denim Jacket",
    category: "MEN",
    image: "/denim-1.png",
    description:
      "A contemporary take on a classic icon. This modern slim denim jacket offers a rugged yet refined look, perfect for layering during any season.",
  },
  {
    id: 6,
    title: "Rugged Jeans",
    category: "MEN",
    image: "/jean-1.png",
    description:
      "Built for durability and style, our Rugged Blue Jeans are a staple for any casual outfit. Engineered for comfort and a perfect fit that lasts.",
  },
  {
    id: 7,
    title: "Elegant Check Shirt",
    category: "MEN",
    image: "/check-2.png",
    description:
      "A refined choice for the discerning gentleman. Our Charcoal Check Shirt combines dark tones with a subtle pattern for a look that's as sophisticated as it is modern.",
  },
  {
    id: 8,
    title: "Coastal Stripe Shirt",
    category: "MEN",
    image: "/stripe-2.png",
    description:
      "Inspired by coastal vibes, this light blue stripe shirt is perfect for weekend getaways or relaxed office days. Breathable and effortlessly cool.",
  },
  {
    id: 9,
    title: "Urban Denim Jacket",
    category: "MEN",
    image: "/denim-2.jpg",
    description:
      "Sleek and versatile, our Urban Grey Denim Jacket is the perfect outer layer for a modern city look. Pairs perfectly with both chinos and jeans.",
  },
  {
    id: 10,
    title: "Premium Plain Shirt",
    category: "MEN",
    image: "/plain-2.png",
    description:
      "A bold, minimalist essential. Our Premium Black Plain Shirt offers a sharp, modern silhouette, perfect for creating a sophisticated monochromatic look.",
  },
  {
    id: 11,
    title: "Classic Stripe Shirt",
    category: "MEN",
    image: "/stripe-3.png",
    description:
      "A timeless Navy Stripe Shirt that brings a nautical flair to your wardrobe. Perfect for business casual or weekend styling.",
  },
  {
    id: 12,
    title: "Modern Check Shirt",
    category: "MEN",
    image: "/check-3.png",
    description:
      "The Slate Check Shirt offers a contemporary twist on a traditional pattern. Its unique color palette ensures you stand out with subtlety.",
  },
  {
    id: 13,
    title: "Bold Abstract Print Shirt",
    category: "MEN",
    image: "/manzo-print-shirt-2.png",
    description:
      "Express your individuality with our Bold Abstract Print Shirt. A conversation starter designed for those who dare to be different.",
  },
  {
    id: 14,
    title: "Relaxed Fit Jeans",
    category: "MEN",
    image: "/jean-2.png",
    description:
      "Comfort meets style in our Relaxed Fit Blue Jeans. Ideal for a laid-back look without compromising on quality or craftsmanship.",
  },
  {
    id: 15,
    title: "Midnight Plain Shirt",
    category: "MEN",
    image: "/plain-3.png",
    description:
      "Versatile and sleek, the Midnight Grey Plain Shirt is an essential for any modern wardrobe. Easy to pair and always in style.",
  },
  {
    id: 16,
    title: "Regal Stripe Shirt",
    category: "MEN",
    image: "/stripe-4.png",
    description:
      "Add a touch of luxury with our Gold Stripe Shirt. Designed for special occasions where you want to look your absolute best.",
  },
  {
    id: 17,
    title: "Forest Check Shirt",
    category: "MEN",
    image: "/check-4.png",
    description:
      "Bring a natural element to your style with the Forest Green Check Shirt. Rugged, comfortable, and perfect for the outdoors.",
  },
  {
    id: 18,
    title: "Geometric Pattern Print Shirt",
    category: "MEN",
    image: "/manzo-print-shirt-3.png",
    description:
      "Sharp and structured, our Geometric Pattern Print Shirt is ideal for those who appreciate modern design and precision.",
  },
  {
    id: 19,
    title: "Fitted Jeans",
    category: "MEN",
    image: "/jean-3.png",
    description:
      "Our Fitted Indigo Jeans offer a sharp, tailored look. Crafted from premium denim with a deep, rich indigo wash.",
  },
  {
    id: 20,
    title: "Sky Stripe Shirt",
    category: "MEN",
    image: "/stripe-5.png",
    description:
      "Fresh and airy, the Sky Blue Stripe Shirt is your go-to for spring and summer. Lightweight fabric ensures all-day comfort.",
  },
  {
    id: 21,
    title: "Ruby Check Shirt",
    category: "MEN",
    image: "/check-5.png",
    description:
      "A vibrant addition to your collection. The Ruby Red Check Shirt brings energy and warmth to any outfit.",
  },
  {
    id: 22,
    title: "Artisanal Motif Print Shirt",
    category: "MEN",
    image: "/manzo-print-shirt-4.png",
    description:
      "Showcase your artistic side with the Artisanal Motif Print Shirt. Detailed designs met with high-quality printing for a unique finish.",
  },
  {
    id: 23,
    title: "Vintage Slim Jeans",
    category: "MEN",
    image: "/jean-4.png",
    description:
      "Classic style with a modern fit. Our Vintage Slim Jeans provide that lived-in feel from day one.",
  },
  {
    id: 24,
    title: "Heritage Pattern Print Shirt",
    category: "MEN",
    image: "/manzo-print-shirt-5.png",
    description:
      "A nod to tradition with a modern silhouette. The Heritage Pattern Print Shirt is a timeless piece for any collection.",
  },
];
