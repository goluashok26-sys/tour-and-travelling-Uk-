interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-golden ${center ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
