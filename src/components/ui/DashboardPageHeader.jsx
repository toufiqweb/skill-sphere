import React from "react";

export default function DashboardPageHeader({
  icon: Icon,
  title,
  subtitle,
  rightContent,
  iconWrapperStyle = "bg-[var(--brand-cyan)]/10 border-[var(--brand-cyan)]/20",
  iconColorStyle = "text-[var(--brand-cyan)] fill-[var(--brand-cyan)]",
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 glass-card rounded-[28px]">
      <div className="flex items-center gap-5">
        <div
          className={`w-14 h-14 rounded-[20px] ${iconWrapperStyle} border flex items-center justify-center shrink-0 shadow-inner`}
        >
          {Icon && <Icon size={28} className={iconColorStyle} />}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight flex items-center gap-2">
            {title}
          </h1>
          <div className="text-xs sm:text-sm font-medium text-muted mt-1">
            {subtitle}
          </div>
        </div>
      </div>
      {rightContent && (
        <div className="flex items-center gap-3">{rightContent}</div>
      )}
    </div>
  );
}
