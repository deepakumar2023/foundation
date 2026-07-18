import React from 'react';

const events = [
  {
    id: 1,
    title: 'Health Camp organized in Mundra',
    date: '15 Oct 2023',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    title: 'Inauguration of new school building',
    date: '10 Oct 2023',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    title: 'Women entrepreneurship training',
    date: '05 Oct 2023',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    title: 'Tree plantation drive across 5 states',
    date: '02 Oct 2023',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    title: 'Skill development workshop completion',
    date: '28 Sep 2023',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    title: 'Distribution of educational kits',
    date: '25 Sep 2023',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400'
  }
];

const EventsGallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-2">Events & Gallery</h2>
            <p className="text-text-muted">Glimpses of our ongoing initiatives and recent events.</p>
          </div>
          <a href="#" className="hidden md:inline-block text-primary font-medium hover:underline">
            View All Events
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                   <span className="text-white text-sm font-medium">{event.date}</span>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100">
                <h4 className="font-medium text-text-main group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-pink-50 transition-colors">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
