import UserMenu from "../../../components/UserMenu";

export default function BrandHeader() {
  return (
    <div className="px-5 py-3.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span
          className="shrink-0 w-9 h-9 rounded-[11px] grid place-items-center shadow-[0_6px_14px_-6px_var(--color-primary)]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-primarystrong))",
          }}
        >
          <svg
            viewBox="0 0 512 512"
            className="w-5 h-5"
            fill="none"
            aria-hidden="true"
          >
            <polyline
              points="100,281 215,379 420,133"
              stroke="#fff"
              strokeWidth="54"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-[19px] font-extrabold text-fg tracking-tight">
          StudyApp
        </span>
      </div>
      <UserMenu />
    </div>
  );
}
