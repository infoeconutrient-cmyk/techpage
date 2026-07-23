interface RecipeMetaProps {
  difficulty?: string;
  cookTime?: string;
  prepTime?: string;
  servings?: string;
}

export default function RecipeMeta({ difficulty, cookTime, prepTime, servings }: RecipeMetaProps) {
  return (
    <div style={{
      display: 'flex',
      gap: '0.7rem',
      marginBottom: '0.6rem',
      flexWrap: 'wrap',
    }}>
      {cookTime && cookTime !== '0 mins' && (
        <span style={metaStyle}>
          <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx={12} cy={12} r={10} />
            <path d="M12 6v6l4 2" />
          </svg>
          {cookTime}
        </span>
      )}
      {prepTime && (
        <span style={metaStyle}>
          <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx={12} cy={12} r={10} />
            <path d="M12 6v6l4 2" />
          </svg>
          {prepTime}
        </span>
      )}
      {difficulty && (
        <span style={metaStyle}>
          <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
          </svg>
          {difficulty}
        </span>
      )}
      {servings && (
        <span style={metaStyle}>
          <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          </svg>
          {servings}
        </span>
      )}
    </div>
  );
}

const metaStyle: React.CSSProperties = {
  fontSize: '0.77rem',
  color: 'var(--text-soft)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
  lineHeight: 1,
};

