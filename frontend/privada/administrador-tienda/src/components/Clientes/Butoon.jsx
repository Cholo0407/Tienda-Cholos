import React from 'react';

export default function ActionButtons({ onDelete }) {
  return (
    <button onClick={onDelete} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <span role="img" aria-label="delete" style={{ fontSize: 18 }}>🗑️</span>
    </button>
  );
}
