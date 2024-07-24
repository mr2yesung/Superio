type DashboardContentCardProps = {
  title: string;
  children: React.ReactNode;
};

function DashboardContentCard({ title, children }: DashboardContentCardProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow-[0_6px_15px_#404f680d] p-5">
      <h4 className="pt-[7px] pb-[27px] min-h-[60px] text-left text-lg leading-[30px] font-medium text-text-primary md:px-[10px] md:pb-[37px]">
        {title}
      </h4>

      {children}
    </div>
  );
}

export default DashboardContentCard;
