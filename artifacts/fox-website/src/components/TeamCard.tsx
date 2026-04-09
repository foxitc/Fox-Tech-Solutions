interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  fact?: string;
  photo?: string;
}

export default function TeamCard({ name, role, bio, initials, fact, photo }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center group" data-testid={`team-card-${name.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="relative mb-5">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-border group-hover:border-primary/50 transition-colors shadow-lg">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover object-center" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="font-display font-bold text-3xl text-primary">{initials}</span>
            </div>
          )}
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
      <h3 className="font-display font-bold text-lg text-secondary">{name}</h3>
      <p className="text-sm font-medium text-primary mb-2">{role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{bio}</p>
      {fact && (
        <p className="mt-3 text-xs text-foreground/50 italic max-w-xs">
          <span className="not-italic font-semibold text-primary/70">Fun fact:</span> {fact}
        </p>
      )}
    </div>
  );
}
