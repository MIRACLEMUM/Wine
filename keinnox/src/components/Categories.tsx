

// Sample category data
const categories = [
  { id: 1, name: "Red Wine", image: "/images/red-wine.jpg" },
  { id: 2, name: "White Wine", image: "/images/white-wine.jpg" },
  { id: 3, name: "Sparkling", image: "/images/sparkling.jpg" },
  { id: 4, name: "Spirits", image: "/images/spirits.jpg" },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((category) => (
          <div key={category.id} className="group relative cursor-pointer">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
