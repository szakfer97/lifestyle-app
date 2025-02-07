// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 mt-8 py-4">
      <div className="container mx-auto text-center text-sm text-foreground/60">
        <p>
          &copy; {new Date().getFullYear()} Lifestyle App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
