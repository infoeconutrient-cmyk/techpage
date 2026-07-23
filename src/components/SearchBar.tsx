interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search products...',
}: SearchBarProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 420,
      }}
    >
      {/* Search icon */}
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: 'absolute',
          left: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-soft, #6b6f6b)',
          pointerEvents: 'none',
        }}
      >
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
        style={{
          width: '100%',
          padding: '0.75rem 1rem 0.75rem 2.6rem',
          border: '1px solid var(--border, rgba(27,27,27,0.08))',
          borderRadius: 999,
          background: 'white',
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontSize: 14,
          color: 'var(--text, #1b1b1b)',
          outline: 'none',
          transition: 'border-color 200ms ease, box-shadow 200ms ease',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--green, #163b2e)';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(22,59,46,0.08)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--border, rgba(27,27,27,0.08))';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: 'var(--text-soft, #6b6f6b)',
            fontSize: 18,
            lineHeight: 1,
            padding: '4px',
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

