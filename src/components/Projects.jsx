function Projects({ onOpenModal }) {
  const projects = [
    {
      title: 'Односторінковий сайт',
      category: 'Landing Page',
      color: 'bg-blue-500'
    },
    {
      title: 'Корпоративний сайт',
      category: 'Corporate',
      color: 'bg-green-500'
    },
    {
      title: 'Інтернет-магазин',
      category: 'E-commerce',
      color: 'bg-purple-500'
    },
    {
      title: 'Онлайн каталог',
      category: 'Catalog',
      color: 'bg-orange-500'
    },
    {
      title: 'Особистий бренд',
      category: 'Personal Brand',
      color: 'bg-pink-500'
    },
    {
      title: 'Електронна візитка',
      category: 'Business Card',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Наші проекти
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl cursor-pointer"
              onClick={onOpenModal}
            >
              <div className={`${project.color} h-64 flex flex-col items-center justify-center relative overflow-hidden`}>
                <span className="text-white text-2xl font-bold z-10">Project Image</span>
                <span className="text-white text-sm mt-2 z-10">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  Переглянути проект →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

