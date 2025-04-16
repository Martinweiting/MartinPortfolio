import {
  BadgeCheck,
  LayoutDashboard,
  LucideIcon,
  MoveRight,
  Rocket,
  ServerCog,
  Sparkles,
  Terminal,
  Wand2,
} from 'lucide-react';

const ToolkitDisplay = () => {
  const tools = [
    {name: 'React', icon: Sparkles, color: '#61DAFB'},
    {name: 'Next.js', icon: LayoutDashboard, color: '#000000'},
    {name: 'Tailwind CSS', icon: Terminal, color: '#38B2AC'},
    {name: 'JavaScript', icon: BadgeCheck, color: '#F7DF1E'},
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6">My Toolkit</h2>
      <div className="flex flex-wrap gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center gap-2">
            <tool.icon color={tool.color} size={32} />
            <span className="text-lg text-foreground">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
