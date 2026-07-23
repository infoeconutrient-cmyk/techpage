interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  value,
  min = 1,
  max = 99,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  const canDecrease = value > min;
  const canIncrease = value < max;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0,
        border: '1px solid var(--border, rgba(27,27,27,0.08))',
        borderRadius: 999,
        overflow: 'hidden',
        background: 'white',
      }}
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={!canDecrease}
        aria-label="Decrease quantity"
        style={{
          width: 40,
          height: 40,
          border: 'none',
          background: canDecrease ? 'transparent' : 'rgba(27,27,27,0.03)',
          color: canDecrease ? 'var(--green, #163b2e)' : 'var(--text-soft, #6b6f6b)',
          fontSize: 20,
          cursor: canDecrease ? 'pointer' : 'not-allowed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 200ms ease',
        }}
      >
        −
      </button>
      <span
        style={{
          minWidth: 44,
          textAlign: 'center',
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontSize: 15,
          fontWeight: 600,
          color: 'var(--text, #1b1b1b)',
          padding: '0 4px',
        }}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={!canIncrease}
        aria-label="Increase quantity"
        style={{
          width: 40,
          height: 40,
          border: 'none',
          background: canIncrease ? 'transparent' : 'rgba(27,27,27,0.03)',
          color: canIncrease ? 'var(--green, #163b2e)' : 'var(--text-soft, #6b6f6b)',
          fontSize: 20,
          cursor: canIncrease ? 'pointer' : 'not-allowed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 200ms ease',
        }}
      >
        +
      </button>
    </div>
  );
}

