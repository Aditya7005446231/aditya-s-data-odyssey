const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aditya Raj Rai. Built with passion.
        </p>
        <p className="text-sm text-muted-foreground">
          Data Science • Full-Stack • Generative AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
