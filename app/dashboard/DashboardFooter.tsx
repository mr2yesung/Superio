function DashboardFooter() {
  return (
    <footer className="py-[30px] md:pt-[60px] md:pb-[50px] text-sm leading-6 text-text-secondary text-center">
      © {new Date().getFullYear()} <span className="text-primary">Superio</span>
      . All rights reserved.
    </footer>
  );
}

export default DashboardFooter;
